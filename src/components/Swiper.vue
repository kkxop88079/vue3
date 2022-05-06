<template>
    <div class="h-[70vh] relative mb-3">
        <div class="absolute bg-gradient-to-b from-black h-24 z-10">
            <div class="flex w-screen items-center mt-6 mb-4">
                <div class="w-4/5">
                    <img src="../assets/logo.png" alt="" class="w-12 ml-3">
                </div>
                <div class="w-1/5 flex mr-4">
               
                </div>
            </div>
            <div class="flex w-3/4 text-white justify-between m-auto font-medium">
                <div>最新上架</div>
                <div>特色遊戲</div>
                <div class="flex items-center">
                    <p class="mr-1">遊戲類別</p>
                    <img src="../assets/arrow.png" alt="" class="w-3 mr-3">
                </div>
            </div>
        </div>
        <div class="absolute bg-gradient-to-t from-black h-auto bottom-0 w-screen pl-2">
            <div class="flex w-screen items-center mt-6 mb-10 flex-col">
                <div class="w-full">
                    <h1 class="text-white md:text-xl text-5xl font-bold m-0 leading-tight mr-0 tracking-tighter">HUGEWIN88</h1>
                </div>
                <div class="flex flex-row w-full tracking-tighter">
                    <div class="text-white  text-2xl font-bold m-0 leading-none md:leading-none mr-1">RELEASE YEAR</div>
                    <div class="text-white  text-2xl font-bold m-0 leading-none md:leading-none">2022</div>
                </div>
            </div>
            <div class="flex text-white justify-center m-auto mb-6 flex-col items-center w-4/5">
                <div class="mb-4 text-lg">經典 • 3D風格 • 熱門排行</div>
                <div class="flex items-center justify-between w-full font-normal text-sm">
                    <div class="flex flex-col items-center justify-center">
                        <div><img src="../assets/add.png" alt="" class="w-5"></div>
                        <div>加入</div>
                    </div>
                    <div class="flex flex-row px-4 py-2 bg-[#D42F26] items-center rounded-md">
                        <img src="../assets/play.png" alt="" class="w-4  mr-1">
                        <div>立即遊玩</div>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <div><img src="../assets/info.png" alt="" class="w-6"></div>
                        <div>資訊</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="">
            <video src="../assets/background.mp4"  autoplay muted loop playsinline type="video/mp4"
            class="object-cover w-full h-[70vh] -z-10" ></video>
        </div>
    </div>

    <div class="ml-2 font-medium mb-6">
        <div class="text-white mb-2">最新上架</div>
        <swiper 
            :slidesPerView="4"
            :spaceBetween="6"
            :loop="true"
            :loopFillGroupWithBlank="true"
            :pagination="{
            clickable: true,
            }"
            :modules="modules"
            class="mySwiper w-full h-auto"
        >
            <swiper-slide v-for="item of list_new" :key="item.id">
                <router-link :to="{ name: 'info2', params: { id: item.id } }">
                    <img :src="item.url" :alt="item.alt">
                </router-link>                
            </swiper-slide>
        </swiper>
    </div>
    
    <div class="ml-2 font-medium mb-6">
        <div class="text-white mb-2">特色遊戲</div>
        <swiper 
            :slidesPerView="4"
            :spaceBetween="6"
            :loop="true"
            :loopFillGroupWithBlank="true"
            :pagination="{
            clickable: true,
            }"
            :modules="modules"
            class="mySwiper w-full h-auto"
        >
            <swiper-slide v-for="item of list_feature" :key="item.id">
                <router-link :to="{ name: 'info2', params: { id: item.id } }">
                    <img :src="item.url" :alt="item.alt">
                </router-link>                
            </swiper-slide>
        </swiper>
    </div>

   <div class="ml-2 font-medium mb-6">
        <div class="text-white mb-2">推薦遊戲</div>
        <swiper 
            :slidesPerView="3"
            :spaceBetween="6"
            :loop="true"
            :loopFillGroupWithBlank="true"
            :pagination="{
            clickable: true,
            }"
            :modules="modules"
            class="mySwiper w-full h-auto"
        >
            <swiper-slide><img src="../assets/s-1.png" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/s-2.png" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/s-3.png" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/s-4.png" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/s-5.png" alt=""></swiper-slide>
        </swiper>
   </div>
   <!-- <div class="ml-2 font-medium mb-6">
        <div class="text-white mb-2">熱門排行</div>
        <swiper 
            :slidesPerView="3"
            :spaceBetween="6"
            :loop="true"
            :loopFillGroupWithBlank="true"
            :pagination="{
            clickable: true,
            }"
            :modules="modules"
            class="mySwiper w-full h-auto"
        >
            <swiper-slide v-for="item of list" :key="item.id">
                <img :src="item.url" :alt="item.alt">
            </swiper-slide>

        </swiper>
   </div> -->
   
   <div class="ml-2 font-medium mb-6">
        <div class="text-white mb-2">熱門排行</div>
        <swiper 
            :slidesPerView="3"
            :spaceBetween="6"
            :loop="true"
            :loopFillGroupWithBlank="true"
            :pagination="{
            clickable: true,
            }"
            :modules="modules"
            class="mySwiper w-full h-auto"
        >
            <swiper-slide v-for="item of list" :key="item.id">
                <router-link :to="{ name: 'info2', params: { id: item.id } }">
                    <img :src="item.url" :alt="item.alt">
                </router-link>                
            </swiper-slide>

        </swiper>
   </div>


   <footer class="container mx-auto text-white py-6 md:px-16 px-4">
    
    <div class="flex items-center justify-center flex-wrap flex-col">
      <p class="opacity-75 text-sm md:mb-0 mb-3">&copy; 2022 By HUGEWIN88.</p>
    </div>
  </footer>
</template>
 <!--  <a href="要前往的連結網址"><img src="圖片 URL" border="0"></a   -->
<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import '~/swiper/swiper.min.css'
    import "~/swiper/css/pagination"
    import { ref } from 'vue'

    const formatUrl = (url) => new URL(url, import.meta.url)

    const list = ref([
        { id: 1, url: formatUrl('../assets/r-1.png'), alt: '1',},
        { id: 2, url: formatUrl('../assets/r-2.png'), alt: '22' },
        { id: 3, url: formatUrl('../assets/r-3.png'), alt: '333' },
        { id: 4, url: formatUrl('../assets/r-4.png'), alt: '4444' },
    ])
    const list_new = ref([
        { id: 1, url: formatUrl('../assets/01.png'), alt: '1',},
        { id: 2, url: formatUrl('../assets/02.png'), alt: '2' },
        { id: 3, url: formatUrl('../assets/03.png'), alt: '3' },
        { id: 4, url: formatUrl('../assets/04.png'), alt: '4' },
        { id: 5, url: formatUrl('../assets/05.png'), alt: '5' },
        { id: 6, url: formatUrl('../assets/06.png'), alt: '6' },
        { id: 7, url: formatUrl('../assets/07.png'), alt: '7' },
        { id: 8, url: formatUrl('../assets/08.png'), alt: '8' },
    ])
    const list_feature = ref([
        { id: 1, url: formatUrl('../assets/08.png'), alt: '1',},
        { id: 2, url: formatUrl('../assets/07.png'), alt: '2' },
        { id: 3, url: formatUrl('../assets/06.png'), alt: '3' },
        { id: 4, url: formatUrl('../assets/05.png'), alt: '4' },
        { id: 5, url: formatUrl('../assets/04.png'), alt: '5' },
        { id: 6, url: formatUrl('../assets/03.png'), alt: '6' },
        { id: 7, url: formatUrl('../assets/02.png'), alt: '7' },
        { id: 8, url: formatUrl('../assets/01.png'), alt: '8' },
    ])

</script>
sc

<style>
    .swiper-slide{
        width: auto;
        height: auto;
    }
</style>

