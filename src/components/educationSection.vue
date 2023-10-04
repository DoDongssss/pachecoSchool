<template>
   <section>
      <div class="flex flex-col">
         <h1
            class="w-fit border-b border-blue-400/30 pb-2 text-left text-xl font-[900] text-primary"
         >
            ACADEMIC PROGRAMS
         </h1>

         <div class="mt-12 flex w-full flex-wrap justify-center gap-5">
            <div
               class="card_container relative flex h-[450px] w-[calc((100%/3)-13.33px)] cursor-pointer items-center justify-center overflow-hidden rounded-sm bg-red-500"
            >
               <img
                  src="../assets/images/pre-school.jpg"
                  alt=""
                  class="bg_image bg_image w-full transition-all duration-300 ease-linear"
               />
               <div class="mask"></div>
               <div class="overlay"></div>
               <div
                  class="card_content absolute bottom-[30px] z-10 flex flex-col items-center transition-all duration-300 ease-linear"
               >
                  <img
                     src="../assets/images/logo.png"
                     alt=""
                     class="h-[90px] w-[90px] animate-bounce opacity-0 transition-all duration-300 ease-linear"
                  />
                  <span
                     class="mt-6 h-[3px] w-full border-e-base-300 bg-[#089642] opacity-0 transition-opacity"
                  ></span>
                  <h1 class="mt-6 text-[30px] font-[900] text-white">Pre</h1>
                  <p class="text-[25px] text-white">School</p>
                  <button
                     onclick="preschool.showModal()"
                     class="mt-5 border-[#089642] font-semibold text-[#089642] opacity-0 transition-all duration-300 ease-linear hover:border-b"
                  >
                     LEARN MORE
                  </button>
               </div>
               <!-- modal -->
               <dialog id="preschool" class="modal">
                  <form
                     method="dialog"
                     class="modal-box w-[700px] max-w-[1000px] rounded-md p-0"
                  >
                     <div
                        class="relative flex h-[150px] items-center justify-center bg-primary"
                     >
                        <!-- <img
                           src="../assets/images/footerbg.jpg"
                           alt=""
                           class="h-full w-full"
                        /> -->

                        <span class="absolute text-4xl text-white"
                           ><span class="font-bold">Pre</span> School</span
                        >
                     </div>
                     <div class="flex flex-col p-6">
                        <!-- <h1 class="text-justify">
                           Welcome to the Pre School section of the ARPCI .
                           There is a wealth of information here for you to
                           digest in your own time and at your own pace, which
                           should answer some of your questions, however we
                           always encourage you to speak to us or your class
                           teacher in person for more context.
                        </h1> -->
                        <h1 class="text-lg font-semibold">What we offer:</h1>
                        <ul
                           class="ml-6 mt-2 flex list-disc flex-col gap-2 text-[16px] text-lg"
                        >
                           <li>Kinder 1</li>
                           <li>Kinder 2</li>
                        </ul>
                        <!-- <div class="mt-12 flex gap-3">
                           <img
                              src="../assets/images/preschool.jpg"
                              alt=""
                              class="h-[calc(100%/3-8px)] w-[calc(100%/3-8px)] rounded-sm"
                           />
                           <img
                              src="../assets/images/preschool.jpg"
                              alt=""
                              class="h-[calc(100%/3-8px)] w-[calc(100%/3-8px)] rounded-sm"
                           />
                           <img
                              src="../assets/images/preschool.jpg"
                              alt=""
                              class="h-[calc(100%/3-8px)] w-[calc(100%/3-8px)] rounded-sm"
                           />
                        </div> -->
                        <div class="mt-8 flex items-center justify-center">
                           <button
                              type="button"
                              class="text-md mt-6 rounded-full border border-[#089642] px-4 py-2 text-black shadow-md transition-[background] hover:bg-[#089642] hover:text-white"
                           >
                              <a href="#contact"> Inquire now </a>
                           </button>
                        </div>
                     </div>
                  </form>
                  <form method="dialog" class="modal-backdrop">
                     <button>close</button>
                  </form>
               </dialog>
            </div>
            <div
               class="card_container relative flex h-[450px] w-[calc((100%/3)-13.33px)] cursor-pointer items-center justify-center overflow-hidden rounded-sm bg-red-500"
            >
               <img
                  src="../assets/images/elementary.jpg"
                  alt=""
                  class="bg_image w-full transition-all duration-300 ease-linear"
               />
               <div class="mask"></div>
               <div class="overlay"></div>
               <div
                  class="card_content absolute bottom-[30px] z-10 flex flex-col items-center transition-all duration-300 ease-linear"
               >
                  <img
                     src="../assets/images/logo.png"
                     alt=""
                     class="h-[90px] w-[90px] animate-bounce opacity-0 transition-all duration-300 ease-linear"
                  />
                  <span
                     class="mt-6 h-[3px] w-full border-e-base-300 bg-[#089642] opacity-0 transition-opacity"
                  ></span>
                  <h1 class="mt-6 text-[30px] font-[900] text-white">
                     Elementary
                  </h1>
                  <p class="text-[30px] text-white">School</p>
                  <button
                     onclick="elementary.showModal()"
                     class="mt-5 border-[#089642] font-semibold text-[#089642] opacity-0 transition-all duration-300 ease-linear hover:border-b"
                  >
                     LEARN MORE
                  </button>
               </div>
               <!-- modal -->
               <dialog id="elementary" class="modal">
                  <form
                     method="dialog"
                     class="modal-box w-[700px] max-w-[1000px] rounded-md p-0"
                  >
                     <div
                        class="relative flex h-[150px] items-center justify-center bg-primary"
                     >
                        <!-- <img
                           src="../assets/images/footerbg.jpg"
                           alt=""
                           class="h-full w-full"
                        /> -->

                        <span class="absolute text-4xl text-white"
                           ><span class="font-bold">Elementary</span>
                           School</span
                        >
                     </div>
                     <div class="flex flex-col p-6">
                        <!-- <h1 class="text-justify">
                           Welcome to the Elementary School section of the ARPCI
                           . There is a wealth of information here for you to
                           digest in your own time and at your own pace, which
                           should answer some of your questions, however we
                           always encourage you to speak to us or your class
                           teacher in person for more context.
                        </h1> -->
                        <h1 class="text-lg font-semibold">What we offer:</h1>
                        <ul
                           class="ml-6 mt-2 flex list-disc flex-col gap-2 text-[16px] text-lg"
                        >
                           <li>Grade 1</li>
                           <li>Grade 2</li>
                           <li>Grade 3</li>
                           <li>Grade 4</li>
                           <li>Grade 5</li>
                           <li>Grade 6</li>
                        </ul>
                        <!-- <div class="mt-12 flex gap-3">
                           <img
                              src="../assets/images/preschool.jpg"
                              alt=""
                              class="h-[calc(100%/3-8px)] w-[calc(100%/3-8px)] rounded-sm"
                           />
                           <img
                              src="../assets/images/preschool.jpg"
                              alt=""
                              class="h-[calc(100%/3-8px)] w-[calc(100%/3-8px)] rounded-sm"
                           />
                           <img
                              src="../assets/images/preschool.jpg"
                              alt=""
                              class="h-[calc(100%/3-8px)] w-[calc(100%/3-8px)] rounded-sm"
                           />
                        </div> -->
                        <div class="mt-8 flex items-center justify-center">
                           <button
                              type="button"
                              class="text-md mt-6 rounded-full border border-[#089642] px-4 py-2 text-black shadow-md transition-[background] hover:bg-[#089642] hover:text-white"
                           >
                              <a href="#contact"> Inquire now </a>
                           </button>
                        </div>
                     </div>
                  </form>
                  <form method="dialog" class="modal-backdrop">
                     <button>close</button>
                  </form>
               </dialog>
            </div>
            <div
               class="card_container relative flex h-[450px] w-[calc((100%/3)-13.33px)] cursor-pointer items-center justify-center overflow-hidden rounded-sm bg-red-500"
            >
               <img
                  src="../assets/images/junior-high.jpg"
                  alt=""
                  class="bg_imag w-full transition-all duration-300 ease-linear"
               />
               <div class="mask"></div>
               <div class="overlay"></div>
               <div
                  class="card_content absolute bottom-[30px] z-10 flex flex-col items-center transition-all duration-300 ease-linear"
               >
                  <img
                     src="../assets/images/logo.png"
                     alt=""
                     class="h-[90px] w-[90px] animate-bounce opacity-0 transition-all duration-300 ease-linear"
                  />
                  <span
                     class="mt-6 h-[3px] w-full border-e-base-300 bg-[#089642] opacity-0 transition-opacity"
                  ></span>
                  <h1 class="mt-6 text-[30px] font-[900] text-white">
                     Junior High
                  </h1>
                  <p class="text-[30px] text-white">School</p>
                  <button
                     onclick="junior.showModal()"
                     class="mt-5 border-[#089642] font-semibold text-[#089642] opacity-0 transition-all duration-300 ease-linear hover:border-b"
                  >
                     LEARN MORE
                  </button>
               </div>
               <!-- modal -->
               <dialog id="junior" class="modal">
                  <form
                     method="dialog"
                     class="modal-box w-[700px] max-w-[1000px] rounded-md p-0"
                  >
                     <div
                        class="relative flex h-[150px] items-center justify-center bg-primary"
                     >
                        <!-- <img
                           src="../assets/images/footerbg.jpg"
                           alt=""
                           class="h-full w-full"
                        /> -->

                        <span class="absolute text-4xl text-white"
                           ><span class="font-bold">Junior High</span>
                           School</span
                        >
                     </div>
                     <div class="flex flex-col p-6">
                        <!-- <h1 class="text-justify">
                           Welcome to the Junior High School section of the
                           ARPCI . There is a wealth of information here for you
                           to digest in your own time and at your own pace,
                           which should answer some of your questions, however
                           we always encourage you to speak to us or your class
                           teacher in person for more context.
                        </h1> -->
                        <h1 class="text-lg font-semibold">What we offer:</h1>
                        <ul
                           class="ml-6 mt-2 flex list-disc flex-col gap-2 text-[16px] text-lg"
                        >
                           <li>Grade 7</li>
                           <li>Grade 8</li>
                           <li>Grade 9</li>
                           <li>Grade 10</li>
                        </ul>
                        <!-- <div class="mt-12 flex gap-3">
                           <img
                              src="../assets/images/preschool.jpg"
                              alt=""
                              class="h-[calc(100%/3-8px)] w-[calc(100%/3-8px)] rounded-sm"
                           />
                           <img
                              src="../assets/images/preschool.jpg"
                              alt=""
                              class="h-[calc(100%/3-8px)] w-[calc(100%/3-8px)] rounded-sm"
                           />
                           <img
                              src="../assets/images/preschool.jpg"
                              alt=""
                              class="h-[calc(100%/3-8px)] w-[calc(100%/3-8px)] rounded-sm"
                           />
                        </div> -->
                        <div class="mt-8 flex items-center justify-center">
                           <button
                              type="button"
                              class="text-md mt-6 rounded-full border border-[#089642] px-4 py-2 text-black shadow-md transition-[background] hover:bg-[#089642] hover:text-white"
                           >
                              <a href="#contact"> Inquire now </a>
                           </button>
                        </div>
                     </div>
                  </form>
                  <form method="dialog" class="modal-backdrop">
                     <button>close</button>
                  </form>
               </dialog>
            </div>
            <div
               class="card_container relative flex h-[450px] w-[calc((100%/3)-13.33px)] cursor-pointer items-center justify-center overflow-hidden rounded-sm bg-red-500"
            >
               <img
                  src="../assets/images/senhigh.jpg"
                  alt=""
                  class="bg_image w-full transition-all duration-300 ease-linear"
               />
               <div class="mask"></div>
               <div class="overlay"></div>
               <div
                  class="card_content absolute bottom-[30px] z-10 flex flex-col items-center transition-all duration-300 ease-linear"
               >
                  <img
                     src="../assets/images/logo.png"
                     alt=""
                     class="h-[90px] w-[90px] animate-bounce opacity-0 transition-all duration-300 ease-linear"
                  />
                  <span
                     class="mt-6 h-[3px] w-full border-e-base-300 bg-[#089642] opacity-0 transition-opacity"
                  ></span>
                  <h1 class="mt-6 text-[30px] font-[900] text-white">
                     Senior High
                  </h1>
                  <p class="text-[30px] text-white">School</p>
                  <button
                     onclick="senior.showModal()"
                     class="mt-5 border-[#089642] font-semibold text-[#089642] opacity-0 transition-all duration-300 ease-linear hover:border-b"
                  >
                     LEARN MORE
                  </button>
               </div>
               <!-- modal -->
               <dialog id="senior" class="modal">
                  <form
                     method="dialog"
                     class="modal-box w-[700px] max-w-[1000px] rounded-md p-0"
                  >
                     <div
                        class="relative flex h-[150px] items-center justify-center bg-primary"
                     >
                        <!-- <img
                           src="../assets/images/footerbg.jpg"
                           alt=""
                           class="h-full w-full"
                        /> -->

                        <span class="absolute text-4xl text-white"
                           ><span class="font-bold">Senior High</span>
                           School</span
                        >
                     </div>
                     <div class="flex flex-col p-6">
                        <!-- <h1 class="text-justify">
                           Welcome to the Senior High School section of the
                           ARPCI . There is a wealth of information here for you
                           to digest in your own time and at your own pace,
                           which should answer some of your questions, however
                           we always encourage you to speak to us or your class
                           teacher in person for more context.
                        </h1> -->
                        <h1 class="text-lg font-semibold">What we offer:</h1>
                        <ul
                           class="ml-6 mt-2 flex list-disc flex-col gap-2 text-[16px] text-lg"
                        >
                           <li>HUMMS</li>
                           <!-- <li>TVL</li> -->
                        </ul>
                        <!-- <div class="mt-12 flex gap-3">
                           <img
                              src="../assets/images/preschool.jpg"
                              alt=""
                              class="h-[calc(100%/3-8px)] w-[calc(100%/3-8px)] rounded-sm"
                           />
                           <img
                              src="../assets/images/preschool.jpg"
                              alt=""
                              class="h-[calc(100%/3-8px)] w-[calc(100%/3-8px)] rounded-sm"
                           />
                           <img
                              src="../assets/images/preschool.jpg"
                              alt=""
                              class="h-[calc(100%/3-8px)] w-[calc(100%/3-8px)] rounded-sm"
                           />
                        </div> -->
                        <div class="mt-8 flex items-center justify-center">
                           <button
                              type="button"
                              class="text-md mt-6 rounded-full border border-[#089642] px-4 py-2 text-black shadow-md transition-[background] hover:bg-[#089642] hover:text-white"
                           >
                              <a href="#contact"> Inquire now </a>
                           </button>
                        </div>
                     </div>
                  </form>
                  <form method="dialog" class="modal-backdrop">
                     <button>close</button>
                  </form>
               </dialog>
            </div>
            <div
               class="card_container relative flex h-[450px] w-[calc((100%/3)-13.33px)] cursor-pointer items-center justify-center overflow-hidden rounded-sm bg-red-500"
            >
               <img
                  src="../assets/images/college.jpg"
                  alt=""
                  class="bg_image w-full transition-all duration-300 ease-linear"
               />
               <div class="mask"></div>
               <div class="overlay"></div>
               <div
                  class="card_content absolute bottom-[30px] z-10 flex flex-col items-center transition-all duration-300 ease-linear"
               >
                  <img
                     src="../assets/images/logo.png"
                     alt=""
                     class="h-[90px] w-[90px] animate-bounce opacity-0 transition-all duration-300 ease-linear"
                  />
                  <span
                     class="mt-6 h-[3px] w-full border-e-base-300 bg-[#089642] opacity-0 transition-opacity"
                  ></span>
                  <h1 class="mt-6 text-[30px] font-[900] text-white">
                     COLLEGE
                  </h1>
                  <p class="text-[30px] text-white">School</p>
                  <button
                     onclick="college.showModal()"
                     class="mt-5 border-[#089642] font-semibold text-[#089642] opacity-0 transition-all duration-300 ease-linear hover:border-b"
                  >
                     LEARN MORE
                  </button>
               </div>
               <!-- modal -->
               <dialog id="college" class="modal">
                  <form
                     method="dialog"
                     class="modal-box w-[700px] max-w-[1000px] rounded-md p-0"
                  >
                     <div
                        class="relative flex h-[150px] items-center justify-center bg-primary"
                     >
                        <!-- <img
                           src="../assets/images/footerbg.jpg"
                           alt=""
                           class="h-full w-full"
                        /> -->

                        <span class="absolute text-4xl text-white"
                           ><span class="font-bold">College</span>
                        </span>
                     </div>
                     <div class="flex flex-col p-6">
                        <!-- <h1 class="text-justify">
                           Welcome to the College section of the ARPCI . There
                           is a wealth of information here for you to digest in
                           your own time and at your own pace, which should
                           answer some of your questions, however we always
                           encourage you to speak to us or your class teacher in
                           person for more context.
                        </h1> -->
                        <h1 class="text-lg font-semibold">What we offer:</h1>
                        <div class="flex flex-col gap-0 md:flex-row">
                           <div
                              class="mt-6 flex w-full items-start justify-center md:w-1/2"
                           >
                              <ul
                                 class="text-md sm:text-md ml-6 flex list-disc flex-col gap-2 text-sm"
                              >
                                 <li>
                                    <label for="" class="font-bold">BEED</label>
                                    <span class="font-semibold">
                                       (Bacheclor of Elementary Education
                                       )</span
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
                                    <label for="" class="font-bold"
                                       >BSCRIM</label
                                    >
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
                           <div
                              class="mt-6 flex w-full items-start justify-center md:w-1/2"
                           >
                              <ul
                                 class="text-md sm:text-md ml-6 flex list-disc flex-col gap-2 text-sm"
                              >
                                 <li>
                                    <label for="" class="font-bold">ACT</label>
                                    <span class="font-semibold">
                                       (2 years Associate in Computer
                                       Technology)</span
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
                                    <label for="" class="font-bold"
                                       >BECED</label
                                    >
                                    <span class="font-semibold">
                                       (BS in Early Childhood Education)</span
                                    >
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div class="mt-8 flex items-center justify-center">
                           <button
                              type="button"
                              class="text-md mt-6 rounded-full border border-[#089642] px-4 py-2 text-black shadow-md transition-[background] hover:bg-[#089642] hover:text-white"
                           >
                              <a href="#contact"> Inquire now </a>
                           </button>
                        </div>
                        <!-- <div class="mt-12 flex gap-3">
                           <img
                              src="../assets/images/preschool.jpg"
                              alt=""
                              class="h-[calc(100%/3-8px)] w-[calc(100%/3-8px)] rounded-sm"
                           />
                           <img
                              src="../assets/images/preschool.jpg"
                              alt=""
                              class="h-[calc(100%/3-8px)] w-[calc(100%/3-8px)] rounded-sm"
                           />
                           <img
                              src="../assets/images/preschool.jpg"
                              alt=""
                              class="h-[calc(100%/3-8px)] w-[calc(100%/3-8px)] rounded-sm"
                           />
                        </div> -->
                     </div>
                  </form>
                  <form method="dialog" class="modal-backdrop">
                     <button class="text-black">close</button>
                  </form>
               </dialog>
            </div>
         </div>

         <!-- <div
            class="w-ful mt-12 flex w-full flex-wrap items-start justify-center gap-6"
         >
            <div
               class="collapse collapse-plus w-full rounded-md border border-gray-200 bg-[url('../assets/images/footerbg.jpg')] bg-cover bg-top text-white shadow-sm md:w-[calc(50%-12px)]"
            >
               <input type="checkbox" name="my-accordion-3" />
               <div
                  class="text-md collapse-title text-center font-[900] md:text-left"
               >
                  PRESCHOOL
               </div>
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
               class="collapse-plus collapse w-full rounded-md border border-gray-200 bg-[url('../assets/images/footerbg.jpg')] bg-cover bg-top text-white shadow-sm md:w-[calc(50%-12px)]"
            >
               <input type="checkbox" name="my-accordion-3" class="z-10" />
               <div
                  class="text-md collapse-title text-center font-[900] md:text-left"
               >
                  ELEMENTARY
               </div>
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
               class="collapse-plus collapse w-full rounded-md border border-gray-200 bg-[url('../assets/images/footerbg.jpg')] bg-cover bg-top text-white shadow-sm md:w-[calc(50%-12px)]"
            >
               <input type="checkbox" name="my-accordion-3" class="z-10" />
               <div
                  class="text-md collapse-title text-center font-[900] md:text-left"
               >
                  JUNIOR HIGH
               </div>
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
               class="collapse-plus collapse w-full rounded-md border border-gray-200 bg-[url('../assets/images/footerbg.jpg')] bg-cover bg-top text-white shadow-sm md:w-[calc(50%-12px)]"
            >
               <input type="checkbox" name="my-accordion-3" class="z-10" />
               <div
                  class="text-md collapse-title text-center font-[900] md:text-left"
               >
                  SENIOR HIGH
               </div>
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
               <div class="collapse-content flex flex-col gap-0 md:flex-row">
                  <div
                     class="mt-6 flex w-full items-start justify-center md:w-1/2"
                  >
                     <ul
                        class="text-md ml-6 flex list-disc flex-col gap-2 text-sm sm:text-lg"
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
                  <div
                     class="mt-6 flex w-full items-start justify-center md:w-1/2"
                  >
                     <ul
                        class="text-md ml-6 flex list-disc flex-col gap-2 text-sm sm:text-lg"
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
         </div> -->
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
.card_container:hover .bg_image {
   transform: scale(1.2);
}
.card_container:hover span,
.card_container:hover button {
   opacity: 1;
}
.card_container {
   min-width: 350px;
   max-width: 400px;
   flex: 1 1 0%;
}
.card_container .mask {
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: 1;
   background: linear-gradient(
      180deg,
      rgba(3, 15, 0, 0) 39.22%,
      rgba(2, 10, 0, 0) 40.22%,
      #020a00 100%
   );
}
.card_container .overlay {
   z-index: 2;
   position: absolute;
   top: 0;
   left: 0;
   bottom: 0;
   right: 0;
   background: #2b308c;
   opacity: 0;
   transform: translateY(100%);
   transition:
      transform 0.5s,
      opacity 0.5s;
}
.card_container:hover .overlay {
   opacity: 0.5;
   transform: translateY(0);
}

.card_container:hover .card_content {
   bottom: 75px;
}

.card_container:hover .card_content img {
   opacity: 1;
}
</style>
