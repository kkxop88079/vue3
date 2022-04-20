<template class="">
  <div class="bg-[#FFDAED] pb-10">
    <Header></Header>
    <Works></Works> 
    <rule></rule>
    <div class="
      flex justify-center text-base md:text-lg  text-[#FF7D9C] m-auto mb-5
      rounded-full bg-slate-50 p-4 w-28 font-bold">
      <a href="/">回到首頁</a>
     </div>
  </div>
</template>


<script>
import IconHome from '~icons/heroicons-outline/globe-alt'

export default {
  components: {
    IconHome,
  },
}

</script>
<script setup>
  import { useHead } from '@vueuse/head'
  // import Layout from '@/components/Layout.vue';
</script>