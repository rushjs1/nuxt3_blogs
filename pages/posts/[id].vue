<script setup>
import { format } from "date-fns";
const title = useState("title");
const route = useRoute();
const config = useRuntimeConfig();
const nuxtApp = useNuxtApp();

const { data: post } = await useFetch(`/posts/${route.params.id}`, {
  baseURL: config.apiBase,
});
//const post = await config.$apiFetch(`/posts/${route.params.id}`);

//console.log(nuxtApp.$hello("John"));
</script>

<template>
  <div class="container mx-auto py-8 w-1/2">
    <div class="post-container py-8">
      <h3 class="text-3xl font-bold">
        <NuxtLink :to="`/posts/${post.id}`">
          {{ post.title }}
        </NuxtLink>
      </h3>
      <div class="post-meta text-gray-700 flex items-center space-x-2">
        <div>{{ format(new Date(post.created_at), "MMMM dd yyyy") }}</div>
        <div>&middot;</div>
        <div>{{ post.user.name }}</div>
      </div>

      <div class="post-preview leading-relaxed mt-4">
        {{ post.body }}
      </div>
    </div>
  </div>
</template>
