<template class="bg-[#f4f4f4]  cursor-pointer ">
  <div class="">
    <Layout></Layout>
    <Works></Works> 
  </div>
  <!-- <IconHome class="w-8 h-8 hover:text-red-600 cursor-pointer" /> -->

  <!-- <heroiconsOutlineHome class="w-10 h-10 hover:text-red-600 cursor-pointer " /> -->
   
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
  import Layout from '@/components/Layout.vue';

  useHead({
    title: 'Ben.',
    meta: [
      {
        name: `description`,
        content: `Ben's UI portfolio `,
      },
    ],
  })
</script>