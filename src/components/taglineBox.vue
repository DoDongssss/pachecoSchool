<template>
   <div
      class="absolute top-[-50px] z-10 flex w-full items-center justify-center transition-all"
      :class="
         scrollPost >= 100
            ? 'opacity-1 translate-y-0'
            : 'translate-y-10 opacity-0'
      "
   >
      <div class="sm max-w-[1000px] px-6">
         <div
            class="flex flex-col gap-5 rounded-md bg-primary p-6 text-white shadow-lg"
         >
            <h1
               class="rounded-md text-center text-sm font-semibold italic sm:text-[1.7vw]"
            >
               Empowering Minds, Shaping Futures, Together at Pacheco College.
            </h1>
            <!-- <div class="text-center">
               <a
                  href=""
                  class="rounded-sm bg-green-500 px-3 py-2 text-lg font-bold"
                  >Inquire Us</a
               >
            </div> -->
         </div>
      </div>
   </div>
</template>

<script>
import { ref } from "vue"
import { translate } from "element-plus"

export default {
   setup() {
      const scrollPost = ref()
      return { scrollPost }
   },
   methods: {
      scroll() {
         this.scrollPost = window.scrollY || window.pageYOffset
      },
   },
   mounted() {
      window.addEventListener("scroll", this.scroll)
   },
   beforeDestroy() {
      window.removeEventListener("scroll", this.scroll)
   },
}
</script>

<style lang="scss" scoped></style>
