<script setup lang="ts">
import type { NavLink } from '~/types/site';

defineProps<{
  logoSrc: string;
  logoAlt: string;
  tagline: string;
  quickLinks: NavLink[];
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  copyright: string;
}>();
</script>

<template>
  <footer class="bg-[#1a2632] px-6 py-12 md:px-8 lg:px-12 xl:px-[140px]">
    <div class="mx-auto w-full max-w-[1216px] lg:px-8">
      <div class="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <!-- 브랜드 -->
        <div class="w-full text-left lg:w-[384px] lg:shrink-0">
          <div class="flex items-center gap-3">
            <img
              :src="logoSrc"
              :alt="logoAlt"
              width="64"
              height="64"
              class="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16"
              loading="lazy"
            >
            <div class="min-w-0 text-[#48aaa9]">
              <p class="text-lg font-bold leading-tight tracking-[0.05px]">
                WORLD BEST
              </p>
              <p class="text-[13px] leading-snug">
                Marketing Agency
              </p>
            </div>
          </div>
          <p class="mt-4 whitespace-pre-line text-base leading-relaxed text-[#d1d5dc]">
            {{ tagline }}
          </p>
        </div>

        <!-- 빠른 링크 -->
        <div class="w-full text-left lg:w-[384px] lg:shrink-0">
          <h4 class="text-left text-base font-semibold leading-6 text-white">
            빠른 링크
          </h4>
          <ul class="mt-4 list-none space-y-2 p-0 text-left">
            <li v-for="link in quickLinks" :key="link.label">
              <NuxtLink
                :to="link.href"
                class="text-base leading-6 text-[#d1d5dc] transition hover:text-white"
                :target="link.external ? '_blank' : undefined"
                :rel="link.external ? 'noopener noreferrer' : undefined"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- 연락처 -->
        <div class="w-full text-left lg:w-[384px] lg:shrink-0">
          <h4 class="text-base font-semibold leading-6 text-white">
            연락처
          </h4>
          <ul class="mt-4 flex flex-col gap-3 p-0">
            <li class="grid grid-cols-[16px_1fr] items-center gap-x-2">
              <svg class="h-4 w-4 shrink-0 text-[#d1d5dc]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <a :href="`tel:${contact.phone}`" class="text-base leading-6 text-[#d1d5dc] hover:text-white">
                {{ contact.phone }}
              </a>
            </li>
            <li class="grid grid-cols-[16px_1fr] items-center gap-x-2">
              <svg class="h-4 w-4 shrink-0 text-[#d1d5dc]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path d="m22 6-10 7L2 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <a :href="`mailto:${contact.email}`" class="text-base leading-6 text-[#d1d5dc] hover:text-white">
                {{ contact.email }}
              </a>
            </li>
            <li class="grid grid-cols-[16px_1fr] items-start gap-x-2">
              <svg class="mt-0.5 h-4 w-4 shrink-0 text-[#d1d5dc]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="1.8" />
              </svg>
              <span class="text-base leading-6 text-[#d1d5dc]">{{ contact.address }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-8 border-t border-[#364153] pt-8 lg:mt-8">
        <p class="text-center text-sm leading-5 text-[#99a1af]">
          {{ copyright }}
        </p>
      </div>
    </div>
  </footer>
</template>
