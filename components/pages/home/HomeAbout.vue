<script setup lang="ts">
import type { HomeContent } from '~/types/home';

defineProps<{
  cards: HomeContent['about'];
}>();

const emphasize = (line: string, words: string[] = []) => {
  if (!words.length) return [{ text: line, strong: false }];
  const parts: { text: string; strong: boolean }[] = [];
  let rest = line;
  for (const word of words) {
    const idx = rest.indexOf(word);
    if (idx === -1) continue;
    if (idx > 0) parts.push({ text: rest.slice(0, idx), strong: false });
    parts.push({ text: word, strong: true });
    rest = rest.slice(idx + word.length);
  }
  if (rest) parts.push({ text: rest, strong: false });
  return parts.length ? parts : [{ text: line, strong: false }];
};
</script>

<template>
  <section class="relative isolate bg-white">
    <article
      v-for="(card, index) in cards"
      :key="`${index}-${card.title}`"
      class="flex items-center justify-center p-4 md:p-6 lg:sticky lg:top-[108px] lg:h-[calc(100dvh-108px)]"
      :style="{ zIndex: index + 1 }"
    >
      <div
        class="grid min-h-[420px] w-full items-center gap-8 overflow-hidden rounded-[40px] px-8 py-12 text-white md:min-h-[520px] md:rounded-[60px] md:px-[80px] lg:h-full lg:min-h-0 lg:grid-cols-[minmax(0,1fr)_449px] lg:px-[136px]"
        :class="card.tone === 'teal' ? 'bg-wb-primary' : 'bg-black'"
      >
        <h3 class="min-w-0 whitespace-pre-line text-[36px] font-extrabold leading-[1.25] tracking-[-2.5px] md:text-[56px] lg:text-[clamp(52px,5.2vw,100px)] lg:leading-[1.3]">
          {{ card.title }}
        </h3>
        <p class="max-w-[449px] text-[20px] font-medium leading-[1.4] tracking-[-1px] md:text-[28px] lg:text-[40px]">
          <template v-for="(line, lineIndex) in card.lines" :key="`${line}-${lineIndex}`">
            <span
              v-for="part in emphasize(line, card.emphasis)"
              :key="part.text"
              :class="part.strong ? 'font-extrabold' : ''"
            >{{ part.text }}</span>
            <br v-if="lineIndex < card.lines.length - 1">
          </template>
        </p>
      </div>
    </article>
  </section>
</template>
