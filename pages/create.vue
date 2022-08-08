<script setup>
const router = useRouter();
const config = useRuntimeConfig();

const title = ref("");
const body = ref();
const isLoading = ref("");
const errors = ref("");

async function submitPost() {
  isLoading.value = true;
  const { post, error } = await useFetch("/post", {
    baseURL: config.apiBase,
    method: "POST",
    body: {
      title: title.value,
      body: body.value,
    },
  });

  if (error.value !== null) {
    console.log(error.value);
    //for getting error status code
    // errors.value = error.value.toString();
    //otherwise to hide server information do this?? nuxt is kinda weird to get used to
    errors.value = "There was an error creating your post.";
    isLoading.value = false;
    return;
  } else {
    isLoading.value = false;
    router.push("/");
  }

  // const fetchError = useState("error", () => error.value.toString());
  // console.log(fetchError);
}
</script>

<template>
  <div class="container mx-auto my-12">
    <div class="flex flex-col space-y-6">
      <div
        v-if="errors"
        class="bg-red-50 border border-red-200 p-2 rounded shadow text-red-800"
      >
        <span>{{ errors }}</span>
      </div>
      <div class="flex flex-col space-y-2">
        <label for="title">Title</label>
        <input
          v-model="title"
          id="title"
          placeholder="Type Here"
          class="p-3 rounded shadow border"
        />
      </div>
      <div class="flex flex-col space-y-2">
        <label for="post">Post</label>
        <textarea
          v-model="body"
          id="post"
          placeholder="Type Here"
          class="p-3 rounded shadow border"
        />
      </div>
      <button
        type="button"
        class="text-white w-36 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center justify-center"
        @click="submitPost"
      >
        <svg
          v-if="isLoading"
          role="status"
          class="inline mr-3 w-4 h-4 text-white animate-spin"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="#E5E7EB"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentColor"
          />
        </svg>
        Submit
      </button>
    </div>
  </div>
</template>
