<template>
   <section>
      <div class="flex flex-col">
         <h1
            class="w-fit border-b border-blue-400/30 pb-2 text-left text-xl font-[900] text-primary_darker"
         >
            ACEDEMIC PROGRAMS
         </h1>
         <div
            class="w-ful mt-12 flex w-full flex-wrap items-start justify-center gap-6"
         >
            <!-- <div
               class="flex w-[calc(50%-24px)] items-center justify-start rounded-sm border border-gray-400 py-2 font-[900]"
            >
               PRESCHOOL
            </div> -->
            <div
               class="collapse collapse-plus w-[calc(50%-12px)] rounded-sm border border-gray-200 shadow-sm"
            >
               <input type="checkbox" name="my-accordion-3" />
               <div class="text-md collapse-title font-[900]">PRESCHOOL</div>
               <div class="collapse-content">
                  <ul
                     class="text-md ml-6 flex list-disc flex-col gap-2 text-sm font-bold"
                  >
                     <li>Kinder 1</li>
                     <li>Kinder 2</li>
                     <li>Kinder 3</li>
                     <li>Kinder 4</li>
                  </ul>
               </div>
            </div>
            <div
               class="collapse-plus collapse w-[calc(50%-12px)] rounded-sm border border-gray-200 shadow-sm"
            >
               <input type="checkbox" name="my-accordion-3" class="z-10" />
               <div class="text-md collapse-title font-[900]">ELEMENTARY</div>
               <div class="collapse-content">
                  <ul
                     class="text-md ml-6 flex list-disc flex-col gap-2 text-sm font-bold"
                  >
                     <li>Grade 1</li>
                     <li>Grade 2</li>
                     <li>Grade 3</li>
                     <li>Grade 4</li>
                     <li>Grade 5</li>
                     <li>Grade 6</li>
                  </ul>
               </div>
            </div>
            <div
               class="collapse-plus collapse w-[calc(50%-12px)] rounded-sm border border-gray-200 shadow-sm"
            >
               <input type="checkbox" name="my-accordion-3" class="z-10" />
               <div class="text-md collapse-title font-[900]">JUNIOR HIGH</div>
               <div class="collapse-content">
                  <ul
                     class="text-md ml-6 flex list-disc flex-col gap-2 text-sm font-bold"
                  >
                     <li>GRADE 7</li>
                     <li>GRADE 8</li>
                     <li>GRADE 9</li>
                     <li>GRADE 10</li>
                  </ul>
               </div>
            </div>
            <div
               class="collapse-plus collapse w-[calc(50%-12px)] rounded-sm border border-gray-200 shadow-sm"
            >
               <input type="checkbox" name="my-accordion-3" class="z-10" />
               <div class="text-md collapse-title font-[900]">SENIOR HIGH</div>
               <div class="collapse-content">
                  <ul
                     class="text-md ml-6 flex list-disc flex-col gap-2 text-sm font-bold"
                  >
                     <li>STEM</li>
                     <li>TVL</li>
                     <li>GAS</li>
                     <li>HUMMS</li>
                     <li>ICT</li>
                  </ul>
               </div>
            </div>
            <div
               class="collapse-plus collapse w-full rounded-sm border border-gray-200 shadow-sm"
            >
               <input type="checkbox" name="my-accordion-3" class="z-10" />
               <div class="text-md collapse-title text-center font-[900]">
                  COLLEGE
               </div>
               <div class="collapse-content">
                  <ul
                     class="text-md ml-6 flex list-disc flex-col gap-2 text-sm font-bold"
                  >
                     <li>STEM</li>
                     <li>TVL</li>
                     <li>GAS</li>
                     <li>HUMMS</li>
                     <li>ICT</li>
                  </ul>
               </div>
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

<style></style>
