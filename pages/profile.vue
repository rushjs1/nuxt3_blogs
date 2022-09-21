<script setup>
const title = useState("title");
const user = ref(null);

//returning 'unauthenticated' when using sanctum auth from laravel with nuxt3... Im not sure what Im doing wrong..
/* const { data: myUser } = await useFetch("/api/user", {
  baseURL: "http://localhost:8000/api/user",
  method: "GET",
  credentials: "include",
  headers: {
    Accept: "application/json",
    "X-XSRF-TOKEN": useCookie("XSRF-TOKEN").value,
  },
}); */


const res = await fetch("http://localhost:8000/api/user", {
  method: "GET",
  credentials: "include",
  headers: {
    Accept: "application/json",
    "X-XSRF-TOKEN": useCookie("XSRF-TOKEN").value,
  },
});

console.log(await res);
</script>

<template>
  <div>Profile</div>
</template>
