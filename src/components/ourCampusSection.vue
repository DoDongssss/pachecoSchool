<template>
   <section class="flex w-full flex-col">
      <div class="flex items-center justify-center">
         <h1
            class="border-b border-blue-400/30 pb-2 text-2xl font-[900] text-primary"
         >
            OUR CAMPUS
         </h1>
      </div>
      <div
         class="mt-8 flex flex-col gap-12 text-justify text-[1.1rem] md:flex-row"
      >
         <p class="w-full flex-auto md:w-1/2">
            Antonio R Pacheco College Inc. has established itself as a true
            educational haven, fostering an environment where students not only
            gain knowledge but also develop essential life skills. The campus is
            more than just a physical space; it's a community that thrives on
            the exchange of ideas and the pursuit of excellence. Beyond the
            confines of classrooms, students benefit from a myriad of
            extracurricular activities, clubs, and events that encourage them to
            explore their passions and cultivate leadership qualities.
         </p>
         <p class="w-full flex-auto md:w-1/2">
            As students progress from one department to another, a sense of
            continuity and shared purpose prevails. The institution's commitment
            to providing a seamless transition from preschool to college
            underscores its dedication to nurturing the growth of each
            individual student. The interplay of departments creates a vibrant
            educational ecosystem where educators collaborate across
            disciplines, ensuring a holistic and integrated learning experience.
         </p>
      </div>
      <div class="hidden md:block">
         <el-carousel :interval="3500" type="card" class="mt-12">
            <el-carousel-item
               v-for="item in items"
               :key="item"
               class="rounded-sm"
            >
               <!-- <h3 text="2xl" justify="center">{{ item.src }}</h3> -->
               <img
                  :src="'../src/assets/images/campus/' + item.src"
                  alt="Static Image"
               />
               <!-- <img src="../assets/images/campus/1.jpg" alt="Dynamic Image" /> -->
            </el-carousel-item>
         </el-carousel>
      </div>

      <div class="block md:hidden">
         <el-carousel :interval="3500" class="mt-12 h-[250px] rounded-md">
            <el-carousel-item
               v-for="item in items"
               :key="item"
               class="rounded-sm"
            >
               <!-- <h3 text="2xl" justify="center">{{ item.src }}</h3> -->
               <img
                  :src="'../src/assets/images/campus/' + item.src"
                  alt="Static Image"
               />
               <!-- <img src="../assets/images/campus/1.jpg" alt="Dynamic Image" /> -->
            </el-carousel-item>
         </el-carousel>
      </div>
   </section>
</template>

<script>
export default {
   setup() {
      const items = [
         {
            src: "1.jpg",
         },
         {
            src: "2.jpg",
         },
         {
            src: "3.jpg",
         },
         {
            src: "4.jpg",
         },
         {
            src: "5.jpg",
         },
         {
            src: "6.jpg",
         },
         {
            src: "7.jpg",
         },
         {
            src: "8.jpg",
         },
         {
            src: "9.jpg",
         },
         {
            src: "10.jpg",
         },
      ]
      return { items }
   },
}
</script>

<style>
.el-carousel--card .el-carousel__container {
   height: 300px !important;
}
.el-carousel__item h3 {
   color: #475669;
   opacity: 0.75;
   line-height: 200px;
   margin: 0;
   text-align: center;
}

.el-carousel__item:nth-child(2n) {
   background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
   background-color: #d3dce6;
}

@media screen and (max-width: 600px) {
   .el-carousel__indicator.el-carousel__indicator--horizontal {
      display: none;
   }
}
</style>
