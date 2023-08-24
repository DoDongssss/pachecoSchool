<template>
   <header
      class="fixed top-0 z-[999999] w-full shadow-[19px] transition-all duration-300 ease-linear"
      :class="
         headerStatus == false && prevScrollPos != 0
            ? 'opacity-1 translate-y-0'
            : prevScrollPos == 0
            ? 'bg-white/50'
            : 'translate-y-[-100%] opacity-0'
      "
   >
      <div class="h-[8px] w-full bg-primary_dark"></div>
      <div
         class="sticky top-0 flex h-[80px] w-full items-center justify-between px-[150px] py-3 transition-colors duration-300 ease-in"
         :class="
            prevScrollPos == 0 ? 'bg-[#0a0a0a]/50 text-white' : 'bg-white '
         "
      >
         <div class="flex items-center">
            <img
               src="../assets/images/logo.png"
               alt=""
               class="h-[65px] w-[65px] transition-all duration-300 ease-linear"
            />
            <!-- <span class="ml-2 text-xl font-semibold italic"
               >Antonio R. Pacheco School</span
            > -->
         </div>
         <div class="flex gap-6">
            <li
               class="font-regular cursor-pointer list-none text-[19px] tracking-wide"
            >
               Home
            </li>
            <li
               class="font-regular cursor-pointer list-none text-[19px] tracking-wide"
            >
               About
            </li>
            <li
               class="font-regular cursor-pointer list-none text-[19px] tracking-wide"
            >
               Education
            </li>
            <li
               class="font-regular cursor-pointer list-none text-[19px] tracking-wide"
            >
               Campus
            </li>
            <li
               class="font-regular cursor-pointer list-none text-[19px] tracking-wide"
            >
               Affiliations
            </li>
            <li
               class="font-regular cursor-pointer list-none text-[19px] tracking-wide"
            >
               Contact
            </li>
         </div>
      </div>
   </header>
</template>

<script>
import { ref } from "vue"

export default {
   setup() {
      const prevScrollPos = ref(0)
      const headerStatus = ref(false)
      return {
         prevScrollPos,
         headerStatus,
      }
   },
   methods: {
      handleScroll() {
         const currentScrollPos = window.scrollY || window.pageYOffset

         if (currentScrollPos > this.prevScrollPos) {
            this.headerStatus = true
         } else {
            this.headerStatus = false
         }

         this.prevScrollPos = currentScrollPos
      },
   },
   mounted() {
      window.addEventListener("scroll", this.handleScroll)
   },
   beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll)
   },
}
</script>

<style lang="scss" scoped></style>
