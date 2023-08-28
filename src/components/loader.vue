<template>
   <div
      class="fixed inset-0 z-[999999999999999] flex items-center justify-center bg-white"
      v-if="isLoading"
   >
      <div class="h-12 w-12">
         <span class="loading loading-dots loading-lg bg-primary"></span>
         <!-- <img src="../assets/images/cube.gif" alt="Animated GIF" /> -->
         <!-- <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            style="
               margin: auto;
               background: none;
               display: block;
               shape-rendering: auto;
            "
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
         >
            <g transform="translate(26.666666666666668,26.666666666666668)">
               <rect x="-20" y="-20" width="40" height="40" fill="#0051a2">
                  <animateTransform
                     attributeName="transform"
                     type="scale"
                     repeatCount="indefinite"
                     dur="1s"
                     keyTimes="0;1"
                     values="1.1500000000000001;1"
                     begin="-0.3s"
                  ></animateTransform>
               </rect>
            </g>
            <g transform="translate(73.33333333333333,26.666666666666668)">
               <rect x="-20" y="-20" width="40" height="40" fill="#1b75be">
                  <animateTransform
                     attributeName="transform"
                     type="scale"
                     repeatCount="indefinite"
                     dur="1s"
                     keyTimes="0;1"
                     values="1.1500000000000001;1"
                     begin="-0.2s"
                  ></animateTransform>
               </rect>
            </g>
            <g transform="translate(26.666666666666668,73.33333333333333)">
               <rect x="-20" y="-20" width="40" height="40" fill="#408ee0">
                  <animateTransform
                     attributeName="transform"
                     type="scale"
                     repeatCount="indefinite"
                     dur="1s"
                     keyTimes="0;1"
                     values="1.1500000000000001;1"
                     begin="0s"
                  ></animateTransform>
               </rect>
            </g>
            <g transform="translate(73.33333333333333,73.33333333333333)">
               <rect x="-20" y="-20" width="40" height="40" fill="#89bff8">
                  <animateTransform
                     attributeName="transform"
                     type="scale"
                     repeatCount="indefinite"
                     dur="1s"
                     keyTimes="0;1"
                     values="1.1500000000000001;1"
                     begin="-0.1s"
                  ></animateTransform>
               </rect>
            </g>
         </svg> -->

         <!-- <embed
            data-v-1665bd5c=""
            src="../assets/images/cuberLoader.svg"
            type="image/svg+xml"
            width="100%"
            height="100%"
         /> -->
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
