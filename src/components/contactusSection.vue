<template>
   <section class="flex flex-col items-center justify-center">
      <h1
         class="border-b border-blue-400/30 pb-2 text-4xl font-bold text-primary"
      >
         CONTACT US
      </h1>
      <form
         action=""
         class="mt-12 flex w-full flex-col gap-6 md:w-[700px]"
         @submit.prevent="handleCaptcha()"
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
                  required
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
                  required
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
                  required
               />
            </div>
            <div class="flex flex-1 flex-col gap-1">
               <label for="" class="text-[13.5px] font-bold text-gray-500"
                  >CONTACT</label
               >
               <input
                  type="number"
                  class="rounded-md border border-gray-400 px-6 py-3"
                  placeholder="E.g. 09098314181 "
                  required
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
                  required
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
                  required
               ></textarea>
            </div>
         </div>
         <div
            class="g-recaptcha"
            data-sitekey="6LfbjbYnAAAAAO7JHrcJtgoce2T18zU-nVmkwjyp"
         ></div>
         <div class="flex items-center justify-between">
            <div
               class="rounded-md border border-green-500 bg-green-500/40 px-6 py-3 text-[#020066] transition-all duration-200 ease-linear"
               :class="status == true ? 'opacity-1' : 'opacity-0'"
            >
               Message sent!
            </div>
            <button
               ref="submitBtn"
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
import axios from "axios"

export default {
   setup() {
      const submitBtn = ref()
      const status = ref(false)
      const contactFrom = ref({
         firstname: null,
         lastname: null,
         email: null,
         contact: null,
         address: null,
         messages: null,
      })
      const emailJSdata = ref({
         service_id: "service_9b5eh41",
         template_id: "template_pewmpk8",
         user_id: "jiEPMBbIF-ES28y1l",
         template_params: {
            username: "",
            from_name: "",
            message: "",
            address: "",
            email: "",
            "g-recaptcha-response": "",
         },
      })
      return {
         status,
         submitBtn,
         contactFrom,
         emailJSdata,
      }
   },
   methods: {
      handleCaptcha() {
         this.submitBtn.disabled = true
         grecaptcha.enterprise.ready(async () => {
            const token = await grecaptcha.enterprise.execute(
               "6Le6IvcnAAAAAMDbWTM4VcqmMFYx4YPggDbdFS-B",
               { action: this.handleSubmit() }
            )
            this.emailJSdata.template_params["g-recaptcha-response"] = token
         })
      },
      async handleSubmit() {
         this.emailJSdata.template_params["from_name"] =
            this.contactFrom.firstname + " " + this.contactFrom.lastname
         this.emailJSdata.template_params["message"] = this.contactFrom.messages
         this.emailJSdata.template_params["address"] = this.contactFrom.address
         this.emailJSdata.template_params["email"] = this.contactFrom.email
         await axios
            .post(
               "https://api.emailjs.com/api/v1.0/email/send",
               this.emailJSdata
            )
            .then((res) => {
               this.status = true
               /* prettier-ignore */
               ;(this.contactFrom.firstname = null),
                  (this.contactFrom.lastname = null),
                  (this.contactFrom.email = null),
                  (this.contactFrom.address = null),
                  (this.contactFrom.messages = null),
                  (this.submitBtn.disabled = false)
               /* prettier-ignore */
               setTimeout( ()=>{
                  this.status = false
               }, 10000)
            })
            .catch((err) => {
               this.submitBtn.disabled = false
            })

         console.log("success")
      },
   },
}
</script>

<style lang="scss" scoped></style>
