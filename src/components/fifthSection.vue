<template>
   <section>
      <el-carousel :interval="3000" type="card">
         <el-carousel-item v-for="item in 6" :key="item" class="rounded-sm">
            <h3 text="2xl" justify="center">{{ item }}</h3>
         </el-carousel-item>
      </el-carousel>
   </section>
</template>

<script>
export default {
   setup() {
      return {}
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
