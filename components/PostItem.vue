<template>
  <div class="post-container py-8">
    <h3 class="text-3xl font-bold">Title Of post</h3>
    <div class="post-meta text-gray-700 flex items-center space-x-2">
      <div>Feb 2, 2022</div>
      <div>&middot;</div>
      <div>John Rush</div>
    </div>

    <div class="post-preview leading-relaxed mt-4">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, omnis.
      Reiciendis laudantium, fugit voluptas eligendi eaque quisquam, nihil
      beatae quaerat ipsa fugiat sapiente incidunt distinctio. Temporibus
      reiciendis dignissimos eaque veritatis.
    </div>

    <div
      class="mt-4 bg-blue-700 hover:bg-blue-800 text-white rounded inline-block px-4 py-2"
    >
      <NuxtLink :to="`/posts/1`"> Read More </NuxtLink>
    </div>
  </div>
</template>
