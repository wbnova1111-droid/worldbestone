export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement, binding) {
      const delay = Number(binding.value ?? 0);
      el.style.transitionDelay = `${delay}ms`;
      el.classList.add('reveal');

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        el.classList.add('is-in');
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          el.classList.add('is-in');
          observer.disconnect();
        },
        { threshold: 0.06, rootMargin: '0px 0px -48px 0px' },
      );
      observer.observe(el);
    },
  });
});
