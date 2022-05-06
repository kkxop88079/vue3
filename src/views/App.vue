<template class="bg-black">
  <div class="overflow-x-hidden">
    <router-link :to="{ name: 'home' }"></router-link>
    <!-- <router-link :to="{ name: 'info2' }">2</router-link> -->
    <router-view></router-view> 
  </div>
</template>

<style>
* {
    scroll-behavior: smooth !important;
}</style>
