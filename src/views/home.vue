<template >
    <div class="bg-black">
    <Works></Works> 
    <Swiper></Swiper>
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
  import Swiper from '../components/Swiper.vue';
</script>

<style>
* {
    scroll-behavior: smooth !important;
}</style>
