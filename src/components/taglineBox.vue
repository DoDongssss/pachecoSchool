<template>
   <div
      class="absolute top-[-50px] z-10 flex w-full items-center justify-center transition-all"
      :class="
         scrollPost >= 100
            ? 'opacity-1 translate-y-0'
            : 'translate-y-10 opacity-0'
      "
   >
      <div class="max-w-[1000px]">
         <h1
            class="rounded-md bg-primary p-6 text-center text-2xl font-semibold italic text-white shadow-lg"
         >
            Empowering Minds, Enriching Futures: Antonio R Pacheco College
            Incorporated
         </h1>
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
