<template>
   <div class="relative z-10 h-full w-full bg-white">
      <headerView />
      <mainSection />
      <div class="relative">
         <taglineBox />
      </div>
      <div class="flex flex-col gap-[150px] p-[100px] px-[150px]">
         <secondSection />
         <thirdSection />
         <fourthSection />
         <ourCampusSection />
         <affiliationSection />
         <!-- <fifthSection /> -->
         <contactusSection />
      </div>
      <footer class="mb-[400px] bg-[#111]"></footer>
      <!-- back to top button -->
      <el-backtop :right="50" :bottom="80" />
   </div>
   <footerView />
</template>

<script>
import headerView from "../components/header.vue"
import footerView from "../components/footer.vue"
import mainSection from "../components/mainSection.vue"
import taglineBox from "../components/taglineBox.vue"
import secondSection from "../components/mainSection.vue"
import thirdSection from "../components/mainSection.vue"
import fourthSection from "../components/fourthSection.vue"
import ourCampusSection from "../components/ourCampusSection.vue"
import fifthSection from "../components/fifthSection.vue"
import affiliationSection from "../components/fifthSection.vue"
import contactusSection from "../components/fifthSection.vue"
export default {
   components: {
      mainSection,
      headerView,
      footerView,
      taglineBox,
      secondSection,
      thirdSection,
      fourthSection,
      ourCampusSection,
      fifthSection,
      affiliationSection,
      contactusSection,
   },
}
</script>

<style lang="scss" scoped></style>
