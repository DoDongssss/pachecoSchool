<template>
   <div
      class="fixed inset-0 z-[999999999999999] flex items-center justify-center bg-white bg-opacity-75"
      v-if="isLoading"
   >
      <div class="h-12 w-12">
         <img src="../assets/images/spinner.gif" alt="Animated GIF" />
      </div>
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
