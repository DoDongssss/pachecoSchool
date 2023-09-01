<template>
   <section>
      <div class="flex flex-wrap gap-6">
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
               adipisicing elit. Cupiditate minus fugiat accusamus labore unde
               expedita quidem, est quasi at illo, voluptate sequi illum ratione
               nostrum?, amet consectetur adipisicing elit. Aut, nulla fugiat
               illum quo, cum eligendi quibusdam voluptatem culpa provident, ad
               officiis dignissimos distinctio cupiditate laboriosam.
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
               adipisicing elit. Cupiditate minus fugiat accusamus labore unde
               expedita quidem, est quasi at illo, voluptate sequi illum ratione
               nostrum?, amet consectetur adipisicing elit. Aut, nulla fugiat
               illum quo, cum eligendi quibusdam voluptatem culpa provident, ad
               officiis dignissimos distinctio cupiditate laboriosam.
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
               adipisicing elit. Cupiditate minus fugiat accusamus labore unde
               expedita quidem, est quasi at illo, voluptate sequi illum ratione
               nostrum?, amet consectetur adipisicing elit. Aut, nulla fugiat
               illum quo, cum eligendi quibusdam voluptatem culpa provident, ad
               officiis dignissimos distinctio cupiditate laboriosam.
            </p>
         </div>
      </div>
   </section>
</template>

<script>
export default {
   setup() {
      return {}
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
