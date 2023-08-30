<template>
   <section class="flex w-full flex-col">
      <div class="flex items-center justify-center">
         <h1
            class="border-b border-blue-400/30 pb-2 text-2xl font-[900] text-primary_darker"
         >
            OUR CAMPUS
         </h1>
      </div>
      <div class="mt-8 flex gap-12 text-justify text-[1.1rem]">
         <p class="w-1/2 flex-auto">
            Antonio R Pacheco College Inc. has established itself as a true
            educational haven, fostering an environment where students not only
            gain knowledge but also develop essential life skills. The campus is
            more than just a physical space; it's a community that thrives on
            the exchange of ideas and the pursuit of excellence. Beyond the
            confines of classrooms, students benefit from a myriad of
            extracurricular activities, clubs, and events that encourage them to
            explore their passions and cultivate leadership qualities. As
            students progress from one department to another, a sense of
            continuity and shared purpose prevails. The institution's commitment
            to providing a seamless transition from preschool to college
            underscores its dedication to nurturing the growth of each
            individual student. The interplay of departments creates a vibrant
            educational ecosystem where educators collaborate across
            disciplines, ensuring a holistic and integrated learning experience.
         </p>
         <p class="w-1/2 flex-auto">
            Antonio R Pacheco College Inc. stands firm in its mission to foster
            a generation of well-rounded individuals equipped to contribute
            positively to society. Its diverse departments, each tailored to
            specific stages of learning, lay the foundation for a journey that
            extends far beyond the classroom. With a rich legacy of educational
            excellence, the college continues to inspire students to reach their
            full potential, instilling values that extend beyond academics and
            into the realm of character development and civic responsibility.
            Amidst the impressive array of departments, Antonio R Pacheco
            College Inc. also takes pride in its strong sense of community. The
            campus serves as a melting pot of cultures, ideas, and experiences,
            fostering an inclusive atmosphere where students collaborate, learn
            from one another, and build lifelong friendships. The college's
            commitment to holistic education extends to creating an environment
            that nurtures personal growth, cultural appreciation, and global
            awareness.
         </p>
      </div>
      <el-carousel :interval="1250" type="card" class="mt-12">
         <el-carousel-item v-for="item in items" :key="item" class="rounded-sm">
            <!-- <h3 text="2xl" justify="center">{{ item.src }}</h3> -->
            <img
               :src="'../src/assets/images/campus/' + item.src"
               alt="Static Image"
            />
            <!-- <img src="../assets/images/campus/1.jpg" alt="Dynamic Image" /> -->
         </el-carousel-item>
      </el-carousel>
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
</style>
