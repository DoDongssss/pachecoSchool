<template>
   <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-75"
      v-if="isLoading"
   >
      <div
         class="loader h-12 w-12 rounded-full border-4 border-t-4 border-gray-200 ease-linear"
      ></div>
   </div>
</template>

<script>
export default {
   props: {
      isLoading: Boolean,
   },
}
</script>

<style scoped>
.loader {
   animation: spin 1s linear infinite;
}

@keyframes spin {
   0% {
      transform: rotate(0deg);
   }
   100% {
      transform: rotate(360deg);
   }
}
</style>
