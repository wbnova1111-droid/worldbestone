<script setup lang="ts">
import type { NoticeItem } from '~/types/notice';

defineProps<{
  notices: NoticeItem[];
}>();

const categoryClass = (category: NoticeItem['category']) => {
  if (category === '공지') return 'bg-brand-100 text-brand-700';
  if (category === '이벤트') return 'bg-purple-100 text-purple-700';
  return 'bg-blue-100 text-blue-700';
};
</script>

<template>
  <div>
    <PageHero title="공지사항" description="월드베스트의 새로운 소식을 확인하세요" />

    <section class="py-16">
      <div class="mobile-container max-w-4xl">
        <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white">
          <div class="hidden grid-cols-12 gap-4 border-b border-gray-200 bg-gray-50 px-6 py-4 text-sm font-bold text-gray-900 md:grid">
            <div class="col-span-1 text-center">번호</div>
            <div class="col-span-2">구분</div>
            <div class="col-span-7">제목</div>
            <div class="col-span-2 text-center">날짜</div>
          </div>

          <article
            v-for="notice in notices"
            :key="notice.id"
            class="border-b border-gray-100 px-6 py-5 last:border-b-0 hover:bg-gray-50"
          >
            <div class="md:grid md:grid-cols-12 md:items-center md:gap-4">
              <p class="text-center text-sm text-gray-500 md:col-span-1">{{ notice.id }}</p>
              <div class="mt-2 md:col-span-2 md:mt-0">
                <span class="inline-block rounded-full px-3 py-1 text-xs font-semibold" :class="categoryClass(notice.category)">
                  {{ notice.category }}
                </span>
              </div>
              <div class="mt-2 flex items-center gap-2 md:col-span-7 md:mt-0">
                <p class="font-semibold text-gray-900">{{ notice.title }}</p>
                <span v-if="notice.isNew" class="rounded-full bg-red-500 px-2 py-0.5 text-xs font-bold text-white">NEW</span>
              </div>
              <p class="mt-2 text-sm text-gray-500 md:col-span-2 md:mt-0 md:text-center">{{ notice.date }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
