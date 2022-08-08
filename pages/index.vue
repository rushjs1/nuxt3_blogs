<script setup>
const title = useState("title");
const route = useRoute();
const config = useRuntimeConfig();
const { data: posts } = await useFetch(`/posts`, {
  baseURL: config.apiBase,
});

/* posts.then((res) => {
  console.log(res.data.value);
}); */
</script>

<template>
  <div class="container mx-auto w-1/2 py-8 divide-y space-y-8 divide-gray-300">
    <Title> Home | {{ title }} </Title>
    <PostItem v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>
