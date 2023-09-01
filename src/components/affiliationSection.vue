<template>
   <section>
      <h1
         class="w-fit border-b border-blue-400/30 pb-2 text-left text-xl font-[900] text-primary"
      >
         ACCREDITATIONS & AFFILIATIONS
      </h1>
      <div class="mt-6 flex flex-col">
         <p class="text-[1.1rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
            dignissimos omnis. Natus, excepturi voluptates veniam dolorem
            debitis vel quidem assumenda laudantium beatae nemo rerum voluptas
            consequatur culpa cupiditate soluta libero! Laudantium reiciendis
            aliquid vero, quaerat deleniti iusto consequatur totam asperiores
            sed. Sunt fugit praesentium possimus officiis vero adipisci placeat
            magnam consequuntur iste eligendi modi ex porro numquam minima, cum
            fuga reiciendis quidem molestias tempore excepturi, nemo optio autem
            pariatur ad. Alias autem optio, eos itaque facilis vel id illo hic
            iste quia quo beatae distinctio amet ducimus facere sunt cumque
            temporibus quos placeat! Animi placeat quos perferendis quasi dolor
            esse!
         </p>
         <div class="mt-12 flex flex-wrap justify-between gap-6">
            <div
               class="relative flex min-w-[270px] max-w-[370px] flex-1 flex-col"
            >
               <div
                  class="rounded-[5px image-container relative h-[250px] cursor-pointer overflow-hidden"
               >
                  <img
                     src="../assets/images/building.jpg"
                     alt=""
                     class="rounded-lg transition-all duration-[400ms]"
                  />
                  <span
                     class="absolute bottom-0 left-0 right-0 z-10 flex h-full w-full translate-y-[100%] items-center justify-center text-4xl font-[900] text-white transition-all duration-[300ms] ease-linear"
                  >
                     Oct. 07, 2023</span
                  >
               </div>
               <h5 class="mt-6 text-lg font-bold">AWARD 1</h5>
               <p class="mt-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quaerat, ratione. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quos, assumenda?
               </p>
            </div>
            <div
               class="relative flex min-w-[270px] max-w-[370px] flex-1 flex-col"
            >
               <div
                  class="rounded-[5px image-container relative h-[250px] cursor-pointer overflow-hidden"
               >
                  <img
                     src="../assets/images/building.jpg"
                     alt=""
                     class="rounded-lg transition-all duration-[400ms]"
                  />
                  <span
                     class="absolute bottom-0 left-0 right-0 z-10 flex h-full w-full translate-y-[100%] items-center justify-center text-4xl font-[900] text-white transition-all duration-[300ms] ease-linear"
                  >
                     Oct. 07, 2023</span
                  >
               </div>
               <h5 class="mt-6 text-lg font-bold">AWARD 3</h5>
               <p class="mt-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quaerat, ratione. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quos, assumenda?
               </p>
            </div>
            <div
               class="relative flex min-w-[270px] max-w-[370px] flex-1 flex-col"
            >
               <div
                  class="rounded-[5px image-container relative h-[250px] cursor-pointer overflow-hidden"
               >
                  <img
                     src="../assets/images/building.jpg"
                     alt=""
                     class="rounded-lg transition-all duration-[400ms]"
                  />
                  <span
                     class="absolute bottom-0 left-0 right-0 z-10 flex h-full w-full translate-y-[100%] items-center justify-center text-4xl font-[900] text-white transition-all duration-[300ms] ease-linear"
                  >
                     Oct. 07, 2023</span
                  >
               </div>
               <h5 class="mt-6 text-lg font-bold">AWARD 2</h5>
               <p class="mt-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quaerat, ratione. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quos, assumenda?
               </p>
            </div>
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
.image-container:hover img {
   transform: scale(1.2);
}
.image-container:hover span {
   background: rgb(43, 48, 140);
   background: linear-gradient(
      365deg,
      rgba(43, 48, 140, 0.75) 0%,
      rgba(175, 198, 233, 0) 100%
   );
   transform: translateY(0);
}
</style>
