<template class="">
  <div class="bg-bgimg w-screen h-screen bg-cover overflow-x-hidden ">
    <div class="fixed  w-12 h-12 justify-center items-center  bottom-10 right-2 z-50">
      <a href="#header" class="flex justify-center items-center">
        <img src="./assets/back.svg" alt="">
      </a>
    </div>
    <Header id="header"></Header>
    <Works></Works> 
    <rule></rule>
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

<style>
* {
    scroll-behavior: smooth !important;
}</style>
