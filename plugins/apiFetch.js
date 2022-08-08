export default defineNuxtPlugin((nuxtApp) => {
  //do something
  return {
    provide: {
      apiFetch: () =>
        $fetch.create({
          baseURL: "http://nuxt3_blogs_backend.test/api",
        }),
    },
  };
});
