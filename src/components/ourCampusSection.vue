<template>
   <section class="flex w-full flex-col">
      <div class="flex items-center justify-center">
         <h1
            class="text-primary_darker border-b border-blue-400/30 pb-2 text-2xl font-[900]"
         >
            OUR CAMPUS
         </h1>
      </div>
      <div class="mt-8 flex gap-12 text-justify text-[1.1rem]">
         <p class="w-1/2 flex-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            ducimus obcaecati eveniet expedita eligendi eum! Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Ab aliquid sunt ratione
            pariatur est labore sapiente, vero adipisci, consequuntur, porro
            eius expedita a ullam harum sit? Excepturi fuga rerum doloremque,
            quae dolorem molestias consectetur recusandae sed quaerat accusamus,
            expedita neque nostrum necessitatibus earum maiores sunt nisi dolore
            est consequuntur at? Suscipit delectus doloribus ad molestias iste
            ipsam cupiditate praesentium quisquam maiores quas, tenetur magnam,
            dolore sint sit! Perspiciatis, excepturi esse iure corrupti nemo
            obcaecati harum enim vitae voluptatum ipsam id sed labore magni hic
            ex, nobis minima repudiandae commodi perferendis? Totam dolor iure
            eveniet animi, ipsa itaque eaque quae molestiae.
         </p>
         <p class="w-1/2 flex-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            ducimus obcaecati eveniet expedita eligendi eum! Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Ab aliquid sunt ratione
            pariatur est labore sapiente, vero adipisci, consequuntur, porro
            eius expedita a ullam harum sit? Excepturi fuga rerum doloremque,
            quae dolorem molestias consectetur recusandae sed quaerat accusamus,
            expedita neque nostrum necessitatibus earum maiores sunt nisi dolore
            est consequuntur at? Suscipit delectus doloribus ad molestias iste
            ipsam cupiditate praesentium quisquam maiores quas, tenetur magnam,
            dolore sint sit! Perspiciatis, excepturi esse iure corrupti nemo
            obcaecati harum enim vitae voluptatum ipsam id sed labore magni hic
            ex, nobis minima repudiandae commodi perferendis? Totam dolor iure
            eveniet animi, ipsa itaque eaque quae molestiae. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Nesciunt provident quo magnam
            nihil, laudantium architecto?
         </p>
      </div>
      <el-carousel :interval="1500" type="card" class="mt-12">
         <el-carousel-item v-for="item in 6" :key="item" class="rounded-sm">
            <h3 text="2xl" justify="center">{{ item }}</h3>
         </el-carousel-item>
      </el-carousel>
   </section>
</template>

<script>
export default {}
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
