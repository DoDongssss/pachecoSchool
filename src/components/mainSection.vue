<template>
   <section>
      <el-carousel
         class="relative h-screen"
         direction="vertical"
         trigger="click"
         :interval="5000"
         :autoplay="true"
      >
         <el-carousel-item v-for="(items, index) in carousel" class="h-full">
            <div class="relative flex h-full items-center justify-center">
               <div class="absolute inset-0 h-full w-full">
                  <img
                     src="../assets/images/slide3.jpg"
                     alt=""
                     class="h-full w-full"
                     v-if="index === 0"
                  />
                  <img
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
                  />

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
                     class="text-md mt-6 rounded-full border-2 border-primary_dark px-8 py-3 text-white shadow-md transition-[background] hover:bg-primary_darker sm:text-xl"
                  >
                     <a href="#contact"> Inquire us </a>
                  </button>
               </div>
               <!-- second section of the carousel -->
               <div class="z-10 p-6" v-if="index == 1"></div>
               <!-- third section of the carousel -->
               <div class="z-10 p-6" v-if="index == 2"></div>
            </div>
         </el-carousel-item>
      </el-carousel>
   </section>
</template>

<script>
export default {
   components: {},
   setup() {
      const carousel = [
         {
            image: "../assets/images/slide1.jpg",
            content: "number2",
         },
         {
            image: "../assets/images/slide2.jpg",
            content: "number2",
         },
         {
            image: "../assets/images/slide3.jpg",
            content: "number2",
         },
      ]
      return {
         carousel,
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
