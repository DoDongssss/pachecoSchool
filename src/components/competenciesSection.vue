<template>
   <section>
      <div class="flex w-full flex-col">
         <h1
            class="w-fit border-b border-blue-400/30 pb-2 text-left text-2xl font-[900] text-primary"
         >
            CORE COMPETENCIES
         </h1>
         <div
            class="mt-12 flex w-full flex-wrap items-start justify-center gap-3 gap-x-6"
         >
            <div
               class="collapse w-[calc(50%-12px)] min-w-[400px] flex-1 rounded-none"
            >
               <input type="checkbox" class="peer" @click="toggleOne()" />
               <div
                  class="collapse-title flex h-[50px] min-h-0 items-center justify-between border border-gray-300 p-0 px-6"
               >
                  <h1
                     class="font-bold transition-colors ease-linear"
                     :class="collapseOne ? ' text-primary' : ''"
                  >
                     MISSION
                  </h1>

                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     class="h-6 w-6 transition-all duration-300 ease-linear"
                     :class="
                        collapseOne
                           ? 'rotate-[-180deg] fill-primary'
                           : 'fill-black'
                     "
                     viewBox="0 0 448 512"
                  >
                     <path
                        d="M384 480c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z"
                     />
                  </svg>
               </div>
               <div
                  class="collapse-content mt-[-10px] border border-t-0 border-gray-300 pt-[1rem]"
               >
                  <p class="text-justify">
                     A.R. Pacheco College Inc. shall inspire and educate
                     students to achieve their full potential and be
                     responsible, respectful, productive, and useful citizens of
                     the community and the country as a whole.
                  </p>
               </div>
            </div>
            <div
               class="collapse w-[calc(50%-12px)] min-w-[400px] flex-1 rounded-none"
            >
               <input type="checkbox" class="peer" @click="toggleTwo()" />
               <div
                  class="collapse-title flex h-[50px] min-h-0 items-center justify-between border border-gray-300 p-0 px-6"
               >
                  <h1
                     class="font-bold transition-colors ease-linear"
                     :class="collapseTwo ? ' text-primary' : ''"
                  >
                     VISION
                  </h1>

                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     class="h-6 w-6 transition-all duration-300 ease-linear"
                     :class="
                        collapseTwo
                           ? 'rotate-[-180deg] fill-primary'
                           : 'fill-black'
                     "
                     viewBox="0 0 448 512"
                  >
                     <path
                        d="M384 480c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z"
                     />
                  </svg>
               </div>
               <div
                  class="collapse-content mt-[-10px] border border-t-0 border-gray-300 pt-[1rem]"
               >
                  <p class="text-justify">
                     A.R. Pacheco College Inc. in partnership with the community
                     envisions as a model institution of quality education that
                     shall produce a graduate with fully developed multiple
                     intelligences and is able to make positive differences
                     wherever he/she may be.
                  </p>
               </div>
            </div>
            <div
               class="collapse w-[calc(50%-12px)] min-w-[400px] flex-1 rounded-none"
            >
               <input type="checkbox" class="peer" @click="toggleThree()" />
               <div
                  class="collapse-title flex h-[50px] min-h-0 items-center justify-between border border-gray-300 p-0 px-6"
               >
                  <h1
                     class="font-bold transition-colors ease-linear"
                     :class="collapseThree ? ' text-primary' : ''"
                  >
                     GOALS
                  </h1>

                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     class="h-6 w-6 transition-all duration-300 ease-linear"
                     :class="
                        collapseThree
                           ? 'rotate-[-180deg] fill-primary'
                           : 'fill-black'
                     "
                     viewBox="0 0 448 512"
                  >
                     <path
                        d="M384 480c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z"
                     />
                  </svg>
               </div>
               <div
                  class="collapse-content mt-[-10px] flex flex-col gap-4 border border-t-0 border-gray-300 pt-[1rem]"
               >
                  <li>
                     To prepare students for leadership and useful resources in
                     the field of education and modern technology in order to
                     help and enhance and improve lives.
                  </li>

                  <li>
                     To challenge students to seek new knowledge and strategies
                     for self and social, socio-economic prosperity.
                  </li>
                  <li>
                     Strengthen the different school programs in every
                     Department.
                  </li>
                  <li>To develop the students multiple intelligences.</li>
                  <li>
                     To provide assistance to those poor but deserving students.
                  </li>
               </div>
            </div>
            <div
               class="collapse w-[calc(50%-12px)] min-w-[400px] flex-1 rounded-none"
            >
               <input type="checkbox" class="peer" @click="toggleFour()" />
               <div
                  class="collapse-title flex h-[50px] min-h-0 items-center justify-between border border-gray-300 p-0 px-6"
               >
                  <h1
                     class="font-bold transition-colors ease-linear"
                     :class="collapseFour ? ' text-primary' : ''"
                  >
                     CORE VALUES
                  </h1>

                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     class="h-6 w-6 transition-all duration-300 ease-linear"
                     :class="
                        collapseFour
                           ? 'rotate-[-180deg] fill-primary'
                           : 'fill-black'
                     "
                     viewBox="0 0 448 512"
                  >
                     <path
                        d="M384 480c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z"
                     />
                  </svg>
               </div>
               <div
                  class="collapse-content mt-[-10px] border border-t-0 border-gray-300 pt-[1rem]"
               >
                  <p class="text-justify">
                     <li>Maka-Diyos</li>
                     <li>Maka-tao</li>
                     <li>Makakalikasan</li>
                     <li>Makabansas</li>
                  </p>
               </div>
            </div>
         </div>

         <!-- <div class="mt-12 flex flex-wrap gap-6">
            <div
               class="card-container hover:rounded-t-0 all r relative flex min-w-[300px] flex-1 cursor-pointer flex-col overflow-hidden rounded-[20px] rounded-b-[20px] bg-gray-100 px-8 py-6 transition-all duration-300 hover:bg-white"
            >
               <div
                  class="card-overlay absolute bottom-0 left-0 right-0 z-10 h-full w-full translate-y-[100%] transition-all duration-300 ease-in-out"
               ></div>
               <div class="flex w-full justify-center">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     class="h-[55px] w-[55px] fill-primary"
                     viewBox="0 0 512 512"
                  >
                     <path
                        d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                     />
                  </svg>
               </div>
               <h2 class="mt-10 text-lg font-bold text-primary">MISSION</h2>
               <p class="mt-2 text-justify">
                  Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Cupiditate minus fugiat accusamus labore
                  unde expedita quidem, est quasi at illo, voluptate sequi illum
                  ratione nostrum?, amet consectetur adipisicing elit. Aut,
                  nulla fugiat illum quo, cum eligendi quibusdam voluptatem
                  culpa provident, ad officiis dignissimos distinctio cupiditate
                  laboriosam.
               </p>
            </div>
            <div
               class="card-container hover:rounded-t-0 all r relative flex min-w-[300px] flex-1 cursor-pointer flex-col overflow-hidden rounded-[20px] rounded-b-[20px] bg-gray-100 px-8 py-6 transition-all duration-300 hover:bg-white hover:bg-none"
            >
               <div
                  class="card-overlay absolute bottom-0 left-0 right-0 z-10 h-full w-full translate-y-[100%] transition-all duration-300 ease-in-out"
               ></div>
               <div class="flex w-full justify-center">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     class="h-[55px] w-[55px] fill-primary"
                     viewBox="0 0 512 512"
                  >
                     <path
                        d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                     />
                  </svg>
               </div>
               <h2 class="mt-10 text-lg font-bold text-primary">VISION</h2>
               <p class="mt-2 text-justify">
                  Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Cupiditate minus fugiat accusamus labore
                  unde expedita quidem, est quasi at illo, voluptate sequi illum
                  ratione nostrum?, amet consectetur adipisicing elit. Aut,
                  nulla fugiat illum quo, cum eligendi quibusdam voluptatem
                  culpa provident, ad officiis dignissimos distinctio cupiditate
                  laboriosam.
               </p>
            </div>

            <div
               class="card-container hover:rounded-t-0 all r relative flex min-w-[300px] flex-1 cursor-pointer flex-col overflow-hidden rounded-[20px] rounded-b-[20px] bg-gray-100 px-8 py-6 transition-all duration-300 hover:bg-white hover:bg-none"
            >
               <div
                  class="card-overlay absolute bottom-0 left-0 right-0 z-10 h-full w-full translate-y-[100%] transition-all duration-300 ease-in-out"
               ></div>
               <div class="flex w-full justify-center">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     class="h-[55px] w-[55px] fill-primary"
                     viewBox="0 0 512 512"
                  >
                     <path
                        d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                     />
                  </svg>
               </div>
               <h2 class="mt-10 text-lg font-bold text-primary">CORE VALUES</h2>
               <p class="mt-2 text-justify">
                  Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Cupiditate minus fugiat accusamus labore
                  unde expedita quidem, est quasi at illo, voluptate sequi illum
                  ratione nostrum?, amet consectetur adipisicing elit. Aut,
                  nulla fugiat illum quo, cum eligendi quibusdam voluptatem
                  culpa provident, ad officiis dignissimos distinctio cupiditate
                  laboriosam.
               </p>
            </div>
         </div> -->
      </div>
   </section>
</template>

<script>
import { ref } from "vue"

export default {
   setup() {
      const collapseOne = ref(false)
      const collapseTwo = ref(false)
      const collapseThree = ref(false)
      const collapseFour = ref(false)

      return {
         collapseOne,
         collapseTwo,
         collapseThree,
         collapseFour,
      }
   },
   methods: {
      toggleOne() {
         this.collapseOne = !this.collapseOne
         // this.collapseTwo = false
         // this.collapseThree = false
      },
      toggleTwo() {
         // this.collapseOne = false
         this.collapseTwo = !this.collapseTwo
         // this.collapseThree = false
      },
      toggleThree() {
         this.collapseThree = !this.collapseThree
      },
      toggleFour() {
         this.collapseFour = !this.collapseFour
      },
   },
}
</script>

<style scoped>
.card-container:hover .card-overlay {
   transform: translateY(0);
   background: rgb(43, 48, 140);
   background: linear-gradient(
      365deg,
      rgba(43, 48, 140, 0.5) 0%,
      rgba(43, 48, 140, 0.25) 40%,
      rgba(255, 255, 255, 0) 81%
   );
}
</style>
