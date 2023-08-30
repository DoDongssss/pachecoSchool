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
               class="collapse-plus collapse w-[calc(50%-12px)] rounded-md border border-gray-200 bg-[url('../assets/images/footerbg.jpg')] bg-cover bg-top text-white shadow-sm"
            >
               <input type="checkbox" name="my-accordion-3" />
               <div class="text-md collapse-title font-[900]">PRESCHOOL</div>
               <div class="collapse-content">
                  <ul
                     class="text-md ml-6 flex list-disc flex-col gap-2 text-sm font-bold"
                  >
                     <li>Kinder 1</li>
                     <li>Kinder 2</li>
                  </ul>
               </div>
            </div>
            <div
               class="collapse-plus collapse w-[calc(50%-12px)] rounded-md border border-gray-200 bg-[url('../assets/images/footerbg.jpg')] bg-cover bg-top text-white shadow-sm"
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
               class="collapse-plus collapse w-[calc(50%-12px)] rounded-md border border-gray-200 bg-[url('../assets/images/footerbg.jpg')] bg-cover bg-top text-white shadow-sm"
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
               class="collapse-plus collapse w-[calc(50%-12px)] rounded-md border border-gray-200 bg-[url('../assets/images/footerbg.jpg')] bg-cover bg-top text-white shadow-sm"
            >
               <input type="checkbox" name="my-accordion-3" class="z-10" />
               <div class="text-md collapse-title font-[900]">SENIOR HIGH</div>
               <div class="collapse-content">
                  <ul
                     class="text-md ml-6 flex list-disc flex-col gap-2 text-sm font-bold"
                  >
                     <li>GAS</li>
                     <li>TVL</li>
                  </ul>
               </div>
            </div>
            <div
               class="collapse-plus collapse rounded-md border border-gray-200 bg-[url('../assets/images/footerbg.jpg')] bg-cover bg-top text-white shadow-sm"
            >
               <input type="checkbox" name="my-accordion-3" class="z-10" />
               <div class="collapse-title text-center text-lg font-[900]">
                  COLLEGE
               </div>
               <div class="collapse-content flex">
                  <div class="mt-6 flex w-1/2 items-start justify-center">
                     <ul
                        class="text-md ml-6 flex list-disc flex-col gap-2 text-lg"
                     >
                        <li>
                           <label for="" class="font-bold">BEED</label>
                           <span class="font-semibold">
                              (Bacheclor of Elementary Education )</span
                           >
                        </li>
                        <li>
                           <label for="" class="font-bold">BSED</label>
                           <span class="font-semibold">
                              (Bacheclor of Secondary Education )</span
                           >
                           <ul class="ml-4 list-[lower-alpha] text-sm">
                              <li>English</li>
                              <li>Math</li>
                              <li>Filipino</li>
                              <li>History</li>
                           </ul>
                        </li>
                        <li>
                           <label for="" class="font-bold">BSCRIM</label>
                           <span class="font-semibold">
                              (BS in Criminology )</span
                           >
                        </li>
                        <li>
                           <label for="" class="font-bold">BSBA</label>
                           <span class="font-semibold">
                              (BS in Business Administration )</span
                           >
                        </li>
                     </ul>
                  </div>
                  <div class="mt-6 flex w-1/2 items-start justify-center">
                     <ul
                        class="text-md ml-6 flex list-disc flex-col gap-2 text-lg"
                     >
                        <li>
                           <label for="" class="font-bold">ACT</label>
                           <span class="font-semibold">
                              (2 years Associate in Computer Technology)</span
                           >
                        </li>
                        <li>
                           <label for="" class="font-bold">BSSW</label>
                           <span class="font-semibold">
                              (BS in Social Work)</span
                           >
                        </li>
                        <li>
                           <label for="" class="font-bold">BSIS</label>
                           <span class="font-semibold">
                              (BS in Information System)</span
                           >
                        </li>
                        <li>
                           <label for="" class="font-bold">BSTM</label>
                           <span class="font-semibold">
                              (BS in Tourism Management)</span
                           >
                        </li>
                        <li>
                           <label for="" class="font-bold">BECED</label>
                           <span class="font-semibold">
                              (BS in Early Childhood Education)</span
                           >
                        </li>
                     </ul>
                  </div>
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
