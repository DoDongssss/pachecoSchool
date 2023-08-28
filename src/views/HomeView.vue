<template>
   <loader :isLoading="loading" />
   <div :class="loading ? 'hidden' : ''">
      <div class="relative z-10 h-full w-full bg-white">
         <headerView />
         <mainSection id="home" />
         <div class="relative">
            <taglineBox />
         </div>
         <div class="flex flex-col gap-[150px] p-[100px] px-[150px]">
            <aboutSection id="about" />
            <competenciesSection />
            <educationSection id="education" />
            <ourCampusSection id="campus" />
            <affiliationSection id="affiliation" />
            <contactusSection id="contact" />
         </div>
         <footer class="mb-[700px] bg-[#111]"></footer>
         <!-- back to top button -->
         <el-backtop :right="50" :bottom="80" :size="500" />
      </div>
      <footerView />
   </div>
</template>

<script>
import { ref } from "vue"
import headerView from "../components/header.vue"
import footerView from "../components/footer.vue"
import mainSection from "../components/mainSection.vue"
import taglineBox from "../components/taglineBox.vue"
import aboutSection from "../components/mainSection.vue"
import competenciesSection from "../components/mainSection.vue"
import educationSection from "../components/educationSection.vue"
import ourCampusSection from "../components/ourCampusSection.vue"
import affiliationSection from "../components/fifthSection.vue"
import contactusSection from "../components/fifthSection.vue"
import loader from "../components/loader.vue"

export default {
   components: {
      mainSection,
      headerView,
      footerView,
      taglineBox,
      aboutSection,
      competenciesSection,
      educationSection,
      ourCampusSection,
      affiliationSection,
      contactusSection,
      loader,
   },
   setup() {
      const loading = ref(true)

      return {
         loading,
      }
   },
   methods: {
      loaderHandler() {
         this.loading = false
      },
   },
   mounted() {
      // setTimeout(() => {
      //    this.loading = false
      //    console.log("yes")
      // }, 10000)
      window.addEventListener("load", this.loaderHandler)
   },
}
</script>

<style lang="scss" scoped></style>
