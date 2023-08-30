<template>
   <section class="flex flex-col items-center justify-center">
      <h1
         class="border-b border-blue-400/30 pb-2 text-4xl font-bold text-primary_darker"
      >
         CONTACT US
      </h1>
      <form
         action=""
         class="mt-12 flex w-full flex-col gap-6 md:w-[700px]"
         @submit.prevent="sendEmail()"
      >
         <div class="flex w-full flex-col gap-6 md:flex-row">
            <div class="flex flex-1 flex-col gap-1">
               <label for="" class="text-[13.5px] font-bold text-gray-500"
                  >FIRSTNAME</label
               >
               <input
                  type="text"
                  class="rounded-md border border-gray-400 px-6 py-3"
                  placeholder="E.g. Juan "
               />
            </div>
            <div class="flex flex-1 flex-col gap-1">
               <label for="" class="text-[13.5px] font-bold text-gray-500"
                  >LASTNAME</label
               >
               <input
                  type="text"
                  class="rounded-md border border-gray-400 px-6 py-3"
                  placeholder="E.g. Dela Cruz"
               />
            </div>
         </div>
         <div class="flex w-full flex-col gap-6 md:flex-row">
            <div class="flex flex-1 flex-col gap-1">
               <label for="" class="text-[13.5px] font-bold text-gray-500"
                  >EMAIL</label
               >
               <input
                  type="email"
                  class="rounded-md border border-gray-400 px-6 py-3"
                  placeholder="E.g. Malibangmangoros@gmail.com"
               />
            </div>
            <div class="flex flex-1 flex-col gap-1">
               <label for="" class="text-[13.5px] font-bold text-gray-500"
                  >CONTACT</label
               >
               <input
                  type="text"
                  class="rounded-md border border-gray-400 px-6 py-3"
                  placeholder="E.g. 09098314181 "
               />
            </div>
         </div>
         <div class="flex w-full flex-col gap-6 md:flex-row">
            <div class="flex flex-1 flex-col gap-1">
               <label for="" class="text-[13.5px] font-bold text-gray-500"
                  >ADDRESS</label
               >
               <input
                  type="text"
                  class="rounded-md border border-gray-400 px-6 py-3"
                  placeholder="E.g. Poblacion Tampakan South Cotabato "
               />
            </div>
         </div>
         <div class="flex w-full flex-col gap-6 md:flex-row">
            <div class="flex flex-1 flex-col">
               <label for="" class="text-[13.5px] font-bold text-gray-500"
                  >MESSAGE</label
               >
               <textarea
                  name=""
                  id=""
                  cols="30d"
                  rows="5"
                  class="rounded-md border border-gray-400 px-6 py-3"
                  placeholder="How can we help you ?"
               ></textarea>
            </div>
         </div>
         <div
            class="g-recaptcha"
            data-sitekey="6LfbjbYnAAAAAO7JHrcJtgoce2T18zU-nVmkwjyp"
         ></div>
         <div class="">
            <button
               type="submit"
               class="float-right w-[150px] rounded-md bg-primary px-6 py-[10px] text-lg font-semibold text-white transition-colors hover:bg-primary_dark"
            >
               Send
            </button>
         </div>
      </form>
   </section>
</template>

<script>
import { ref } from "vue"
import emailjs from "emailjs-com"
import axios from "axios"

export default {
   setup() {
      const contactFrom = ref({
         firstname: null,
         lastname: null,
         email: null,
         contact: null,
         address: null,
         messages: null,
      })
      return { contactFrom }
   },
   methods: {
      async sendEmail() {
         // const mailToLink = `mailto:${"johnny.asumbra@eulap.com"}?subject=${encodeURIComponent(
         //    this.contactFrom.lastname
         // )}&body=${encodeURIComponent(this.contactFrom.messages)}`
         // window.location.href = mailToLink

         await emailjs
            .send(
               "service_y0cfvq1",
               "template_pewmpk8",
               {
                  to_email: "christianemmanuel.espinosa@eulap.com",
                  subject: this.contactFrom.lastname,
                  message: this.contactFrom.messages,
               },
               "jiEPMBbIF-ES28y1l"
            )
            .then((res) => {
               console.log(res)
            })
            .catch((err) => {
               console.log(err)
            })
      },

      async handleSend() {
         grecaptcha.enterprise.ready(async () => {
            const token = await grecaptcha.enterprise.execute(
               "6LfbjbYnAAAAAJoNek_w8hhV0M8sdrDon2hv9OTq"
            )
            await this.verifyCaptcha(token)
            this.sendEmail()
         })
      },

      async verifyCaptcha(recaptchaToken) {
         console.log(recaptchaToken)
         const response = await axios.post("/verify-recaptcha", recaptchaToken)
         console.log(response)
      },

      async check(token) {
         const response = await axios.post(
            "https://www.google.com/recaptcha/api/siteverify",
            null,
            {
               params: {
                  secret: "6LfbjbYnAAAAAJoNek_w8hhV0M8sdrDon2hv9OTq",
                  response: token,
               },
            }
         )
         console.log(response)
      },
   },
}
</script>

<style lang="scss" scoped></style>
