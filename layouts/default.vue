<script setup>
const navArr = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Contact",
    to: "/contact",
  },
  {
    label: "Create",
    to: "/create",
  },
];

const title = useState("title", () => "Nuxt3 Blog");
</script>
<template>
  <div class="bg-gray-100 min-h-screen">
    <Title> {{ title }} </Title>
    <nav class="bg-white shadow text-lg p-6">
      <div class="mx-auto flex items-center justify-between px-6">
        <div>
          <NuxtLink to="/"> Logo</NuxtLink>
        </div>

        <ul class="flex space-x-12">
          <li
            class="hover:text-blue-500"
            v-for="(route, index) in navArr"
            :key="index"
          >
            <NuxtLink :to="route.to">
              {{ route.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>

    <slot />
    <footer class="px-10 py-4 w-full">
      <hr />
      <ul class="mt-4 flex justify-end w-full space-x-6">
        <li
          class="hover:text-blue-500"
          v-for="(route, index) in navArr"
          :key="index"
        >
          <NuxtLink :to="route.to">
            {{ route.label }}
          </NuxtLink>
        </li>
      </ul>
    </footer>
  </div>
</template>

<style>
.router-link-active {
  color: rgb(59 130 246);
  font-weight: bold;
}
</style>
