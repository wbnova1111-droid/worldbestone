export default defineNuxtPlugin(() => {
  const scrollToHash = (hash: string) => {
    if (!hash) return;
    let tries = 0;
    const run = () => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      if (tries++ < 40) window.setTimeout(run, 50);
    };
    run();
  };

  const router = useRouter();
  router.afterEach((to) => {
    if (to.hash) {
      nextTick(() => scrollToHash(to.hash));
    }
  });

  onNuxtReady(() => {
    if (window.location.hash) scrollToHash(window.location.hash);
  });
});
