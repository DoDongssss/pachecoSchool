<template>
   <section>
      <el-carousel
         class="relative h-screen"
         direction="vertical"
         trigger="click"
         :interval="5000"
         :autoplay="true"
      >
         <el-carousel-item v-for="(items, index) in slides" class="h-full">
            <div class="relative flex h-full items-center justify-center">
               <div class="absolute inset-0 h-full w-full">
                  <img
                     :src="'/slides/' + items.src"
                     alt=""
                     class="h-full w-full"
                  />
                  <!-- <img
                     src="../assets/images/slide2.jpg"
                     alt=""
                     class="h-full w-full"
                     v-if="index === 1"
                  />
                  <img
                     src="../assets/images/slide1.jpg"
                     alt=""
                     class="h-full w-full"
                     v-if="index === 2"
                  /> -->

                  <!-- <img
                     src="../assets/images/slide1.jpg"
                     alt=""
                     class="h-full w-full"
                  /> -->
                  <!-- <div class="absolute inset-0 h-full w-full bg-black/25">
            
                  </div> -->
               </div>

               <!-- <div class="z-10 p-6">
               <h3 text="2xl" justify="center">{{ items.content }}</h3> 
               <img src="../assets/images/zoneIV.png" alt="" />
               <h1>{{ index }}</h1>
            </div> -->

               <!-- first section of the carousel -->
               <div
                  class="z-10 flex flex-col items-center justify-center p-6"
                  v-if="index == 0"
               >
                  <img
                     src="../assets/images/logo.png"
                     alt=""
                     class="h-[125px] w-[125px] sm:h-[200px] sm:w-[200px]"
                  />
                  <h1 class="text-[4vw] font-[900] italic text-white">
                     ANTONIO R. PACHECO COLLEGE, INC.
                  </h1>
                  <button
                     class="text-md mt-6 rounded-full border-2 border-[#089642] px-8 py-3 text-white shadow-md transition-[background] hover:bg-[#089642] sm:text-xl"
                  >
                     <a href="#contact"> Inquire us </a>
                  </button>
               </div>
               <!-- second section of the carousel -->
               <div
                  class="z-10 flex h-full w-full flex-col items-center justify-center p-6 sm:items-end md:px-[150px]"
                  v-if="index === 1"
               >
                  <h1 class="text-xl font-[900] text-white sm:text-[3.6vw]">
                     EDUCATION
                  </h1>
                  <p
                     class="text-md mt-5 text-center leading-snug text-white sm:text-right sm:text-5xl"
                  >
                     Shaping Bright Futures with a foundation of Excellence in
                     education
                  </p>
                  <!-- <button
                     class="mt-6 rounded-lg bg-primary px-8 py-3 text-sm text-white shadow-md transition-[background] hover:bg-[#159d39] sm:text-xl"
                  >
                     <a href="#education"> Offering </a>
                  </button> -->
               </div>
               <!-- third section of the carousel -->
               <div
                  class="z-10 flex h-full w-full flex-col items-center justify-center p-6 sm:items-start sm:px-[150px]"
                  v-if="index === 2"
               >
                  <h1 class="text-xl font-[900] text-white sm:text-[3.6vw]">
                     EVENTS
                  </h1>
                  <p
                     class="text-md mt-5 text-center leading-snug text-white sm:text-left sm:text-5xl"
                  >
                     Nurturing minds through sports and beyond: Fostering
                     Holistic Excellence in Education.
                  </p>
                  <!-- <button
                     class="mt-6 rounded-lg bg-primary px-8 py-3 text-sm text-white shadow-md transition-[background] hover:bg-[#159d39] sm:text-xl"
                  >
                     <a href="#campus"> EVENTS/SPORT </a>
                  </button> -->
               </div>
            </div>
         </el-carousel-item>
      </el-carousel>
   </section>
</template>

<script>
export default {
   components: {},
   setup() {
      const slides = [
         {
            src: "slide1.jpg",
         },
         {
            src: "slide2.jpg",
         },
         {
            src: "slide3.jpg",
         },
      ]
      return {
         slides,
      }
   },
}
</script>

<style>
.el-carousel__container {
   height: 100%;
}
.el-carousel__item h3 {
   color: #475669;
   opacity: 0.75;
   line-height: 200px;
   margin: 0;
   text-align: center;
}

.el-carousel__indicators.el-carousel__indicators--vertical {
   margin-left: 50px;
   left: 0;
   right: 100%;
}
.el-carousel__indicator.el-carousel__indicator--vertical {
   padding: 7px 0;
}
.el-carousel__indicator--vertical .el-carousel__button {
   height: 25px;
   width: 10px;
   border-radius: 15px;
}

@media screen and (max-width: 600px) {
   .el-carousel__indicators.el-carousel__indicators--vertical {
      visibility: hidden;
   }
}
</style>
