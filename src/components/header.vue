<template>
   <header
      class="fixed top-0 z-[999999] w-full shadow-sm transition-all duration-300 ease-linear"
      :class="
         headerStatus == false && prevScrollPos != 0
            ? 'opacity-1 translate-y-0'
            : prevScrollPos == 0
            ? 'bg-white/50'
            : 'translate-y-[-100%] opacity-0'
      "
   >
      <div class="h-[8px] w-full bg-primary"></div>
      <div
         class="sticky top-0 flex h-[80px] w-full items-center justify-between px-[25px] py-3 transition-colors duration-300 ease-in sm:px-[50px] md:px-[150px]"
         :class="prevScrollPos == 0 ? 'bg-black/0 text-white' : 'bg-white '"
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
         <div class="hidden items-center gap-6 lg:flex">
            <li
               class="font-regular cursor-pointer list-none text-[19px] tracking-wide"
               :class="
                  sectionRecieve == 'home'
                     ? 'scale-110 text-primary transition-all ease-in-out'
                     : ''
               "
            >
               <a href="#home"> Home</a>
            </li>
            <li
               class="font-regular cursor-pointer list-none text-[19px] tracking-wide"
               :class="
                  sectionRecieve == 'about'
                     ? 'scale-110 text-primary transition-all ease-in-out'
                     : ''
               "
            >
               <a href="#about">About</a>
            </li>
            <li
               class="font-regular cursor-pointer list-none text-[19px] tracking-wide"
               :class="
                  sectionRecieve == 'education'
                     ? 'scale-110 text-primary transition-all ease-in-out'
                     : ''
               "
            >
               <a href="#education">Education</a>
            </li>
            <li
               class="font-regular cursor-pointer list-none text-[19px] tracking-wide"
               :class="
                  sectionRecieve == 'campus'
                     ? 'scale-110 text-primary transition-all ease-in-out'
                     : ''
               "
            >
               <a href="#campus">Campus</a>
            </li>
            <li
               class="font-regular cursor-pointer list-none text-[19px] tracking-wide"
               :class="
                  sectionRecieve == 'affiliation'
                     ? 'scale-110 text-primary transition-all ease-in-out'
                     : ''
               "
            >
               <a href="#affiliation">Affiliations</a>
            </li>
            <li
               class="font-regular cursor-pointer list-none text-[19px] tracking-wide"
               :class="
                  sectionRecieve == 'contact'
                     ? 'scale-110 text-primary transition-all ease-in-out'
                     : ''
               "
            >
               <a href="#contact">Contact</a>
            </li>
            <li class="ml-5 list-none">
               <button
                  class="rounded bg-primary/90 px-4 py-2 text-white transition-all hover:bg-[#089642]"
               >
                  <a
                     href="https://arpacheco.eulap.com/cbs/a/login"
                     target="_blank"
                  >
                     Login
                  </a>
               </button>
            </li>
         </div>
         <div class="dropdown dropdown-end lg:hidden">
            <label tabindex="0" class="btn btn-circle btn-ghost">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block h-7 w-7 stroke-current"
               >
                  <path
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     stroke-width="2"
                     d="M4 6h16M4 12h16M4 18h16"
                  ></path></svg
            ></label>
            <ul
               tabindex="0"
               class="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-3 text-black shadow"
            >
               <li>
                  <a
                     href="#home"
                     :class="sectionRecieve == 'home' ? 'text-primary' : ''"
                     >Home</a
                  >
               </li>
               <li>
                  <a
                     href="#about"
                     :class="sectionRecieve == 'about' ? 'text-primary' : ''"
                     >About</a
                  >
               </li>
               <li>
                  <a
                     href="#education"
                     :class="
                        sectionRecieve == 'education' ? 'text-primary' : ''
                     "
                     >Education</a
                  >
               </li>
               <li>
                  <a
                     href="#campus"
                     :class="sectionRecieve == 'campus' ? 'text-primary' : ''"
                     >Campus</a
                  >
               </li>
               <li>
                  <a
                     href="#affiliation"
                     :class="
                        sectionRecieve == 'affiliation' ? 'text-primary' : ''
                     "
                     >Affiliation</a
                  >
               </li>
               <li>
                  <a
                     href="contact"
                     :class="sectionRecieve == 'contact' ? 'text-primary' : ''"
                     >Contact</a
                  >
               </li>
            </ul>
         </div>
      </div>
   </header>
   <header></header>
</template>

<script>
import { ref } from "vue"

export default {
   props: {
      activeSection: String,
   },
   setup() {
      const prevScrollPos = ref(0)
      const headerStatus = ref(false)
      const currentScrollPos = ref(0)
      const innerHeight = ref(window.innerHeight || window)
      return {
         prevScrollPos,
         headerStatus,
         innerHeight,
      }
   },
   methods: {
      handleScroll() {
         this.currentScrollPos = window.scrollY || window.pageYOffset

         if (this.currentScrollPos > this.prevScrollPos) {
            this.headerStatus = true
         } else {
            this.headerStatus = false
         }

         this.prevScrollPos = this.currentScrollPos
         // console.log(this.currentScrollPos)
      },
   },
   computed: {
      sectionRecieve() {
         return this.activeSection
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
