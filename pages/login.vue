<script setup>
const config = useRuntimeConfig();
const email = ref("");
const password = ref("");
const errorMsgs = ref([]);
const user = reactive({});
const isLoading = ref(false);

const csrf = () => {
  return useFetch("/sanctum/csrf-cookie", {
    baseURL: "http://localhost:8000/",
    credentials: "include",
  });
};

async function login() {
  // await csrf();
  console.log("here");
  await useFetch("/sanctum/csrf-cookie", {
    baseURL: "http://localhost:8000",
    credentials: "include",
  });

  console.log(await useCookie("XSRF-TOKEN").value);

  const { data, error } = await useFetch("/login", {
    baseURL: "http://localhost:8000",
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "X-XSRF-TOKEN": useCookie("XSRF-TOKEN").value,
    },
    body: {
      email: email.value,
      password: password.value,
    },
  });

  if (error.value !== null) {
    Object.keys(error.value.data.errors).forEach((k) => {
      errorMsgs.value.push(error.value.data.errors[k].toString());
    });
  } else {
    window.location.pathname = "/profile";
  }
}
</script>
<template>
  <div class="mx-auto my-12 px-96">
    <div class="w-full flex flex-col items-center space-y-6">
      <div class="flex flex-col w-full">
        <div
          v-if="errorMsgs.length > 0"
          class="bg-red-50 border border-red-200 p-2 rounded mb-4 text-red-600 flex flex-col"
        >
          <span v-for="(err, index) in errorMsgs" :key="index">{{ err }}</span>
        </div>
        <label for="email">Email</label>
        <input
          v-model="email"
          id="email"
          class="p-2 rounded shadow"
          placeholder="mail@example.com"
        />
      </div>
      <div class="flex flex-col w-full">
        <label for="password">Password</label>
        <input
          v-model="password"
          id="password"
          type="password"
          class="p-2 shadow rounded"
        />
      </div>
      <button
        @click="login"
        class="bg-blue-500 w-full rounded p-2 text-white shadow hover:bg-blue-600"
      >
        Login
      </button>
    </div>
  </div>
</template>
