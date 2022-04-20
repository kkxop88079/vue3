<template>
  <div>
      <div class="w-screen lg:w-3/4 md:w-3/4 mx-auto">
        <ul class="flex justify-center space-x-2 text-[#521010] font-bold">
          <li v-for="item of buttonList" :key="item.id">
            <button
              @click="currentTab(item.id)"
              class="inline-block px-8 py-3 bg-[#FBBA32] focus:outline-none rounded-md font-bold overflow-hidden border-2 border-[#924e20] "
              :class="{'text-[#d11d1d] bg-[#FBBA32] font-vold border-2 border-white' : tab === item.id}"
            >
              {{ item.label }}
            </button>
          </li>
        </ul>
        <div class="  mt-6  h-auto ">
          <div v-if="tab === 1">
            <!--  -->
              <div class="w-12/12 md:max-w-[800px] m-auto flex justify-center">
                <img src="../assets/top.png" alt="" class="object-fill z-0">
                <div class="flex justify-center z-10"></div>
              </div>
              <div class="w-12/12  md:max-w-[800px] m-auto flex justify-center bg-imgcenter bg-repeat-y bg-contain">
                  <div class=" ">
                    <h1 class="z-10  text-center">
                      <div class="text-2xl md:text-4xl font-bold mb-10 flex flex-wrap justify-center text-[rgb(88,42,12)]">
                        <img src="../assets/icon.svg" alt="" width="30px" class="mx-2">
                        每日尋寶活動
                        <img src="../assets/icon.svg" alt="" width="30px" class="mx-2">
                      </div>
                      <div class="text-xl mb-4">活動時間：</div>
                      <div class="text-md mb-10">4/8(五) 06:00 - 4/22 (五) 05:59</div>
                      <div class="text-xl mb-4">參加方式：</div>
                      <div class="text-md w-9/12 m-auto mb-10">只要你是GPG的正式會員，在活動期間內每日皆可尋寶一次，重置時間為每日 AM6:00，記得上線挖好禮喔！</div>
                      <div class="w-9/12 md:w-1/2 h-auto m-auto mb-10">
                        <img src="../assets/event202204ex.png" alt="">
                      </div>
                      <div class="w-9/12 md:w-1/2 h-auto m-auto my-20">
                        <a href="?event=april-weekend" class="px-6 py-2 md:px-6 md:py-4 font-bold bg-[#924e20] rounded-full text-white cursor-pointer border-2 border-[#924e20] shadow-md">前往挖寶</a>
                      </div>
                      <div class="text-xl mb-10">挖礦獎勵：</div>
                      <div class="w-8/12 md:w-6/12 m-auto flex justify-around">
                          <div class="rounded-full w-24 h-24 mx-2">
                            <img src="../assets/Group4.png" alt="">
                          </div>
                          <div class="rounded-full w-24 h-24 mx-2">
                            <img src="../assets/Group5.png" alt="">
                          </div>
                          <div class="rounded-full w-24 h-24 mx-2">
                            <img src="../assets/Group6.png" alt="">
                          </div>
                      </div>
                    </h1>
                  </div>
              </div>
              <div class="w-12/12  md:max-w-[800px] m-auto flex justify-center mb-14">
                  <img src="../assets/bottom.png" alt="" class="object-fill z-0">
                  <div class="flex justify-center z-10 "></div>
              </div>
            <!--  -->
          </div>
          <div v-if="tab === 2">
            <!--  -->
              <div class="w-12/12 md:max-w-[800px] m-auto flex justify-center">
                <img src="../assets/top.png" alt="" class="object-fill z-0">
                <div class="flex justify-center z-10"></div>
              </div>
              <div class="w-12/12  md:max-w-[800px] m-auto flex justify-center bg-imgcenter bg-repeat-y bg-contain">
                  <div class=" ">
                    <h1 class="z-10  text-center">
                      <div class="text-2xl md:text-4xl font-bold mb-10 flex flex-wrap justify-center text-[rgb(88,42,12)]">
                        <img src="../assets/icon.svg" alt="" width="30px" class="mx-2">
                        祕寶禮包
                        <img src="../assets/icon.svg" alt="" width="30px" class="mx-2">
                      </div>
                      <div class="text-xl mb-4">活動介紹：</div>
                      <div class="text-md w-9/12 m-auto mb-10">經過重重探險，你的礦機巴特咬回來了虎課船長的航海圖以及法老王的陵墓指南兩個大禮包。限時儲值返利無上限！寶藏就在禮包中！</div>
                      <div class="text-xl mb-4">活動時間：</div>
                      <div class="text-md mb-10">4/08(五) 06:00 - 4/22 (五) 05:59</div>
                      <div class="text-xl mb-4">參加方式：</div>
                      <div class="text-md w-9/12 m-auto mb-10">只要你是GPG的正式會員皆可購買大秘寶禮包，不限次數、活動期間內皆可選購。</div>
                      <div class="w-9/12 md:w-1/2 h-auto m-auto mb-10">
                        <div class="flex justify-center mb-6">
                          <img src="../assets/gift01.png" alt="">
                        </div>
                        <div class="flex flex-row w-12/12 ">
                          <div class="w-1/4 bg-[#FBBA32] py-2 border border-[#c79323]">金幣</div>
                          <div class="w-1/4 bg-[#FBBA32] py-2 border border-[#c79323]">銀幣</div>
                          <div class="w-1/4 bg-[#FBBA32] py-2 border border-[#c79323]">虛寶</div>
                          <div class="w-1/4 bg-[#FBBA32] py-2 border border-[#c79323]">積分</div>
                        </div>
                        <div class="flex flex-row w-12/12 mb-6">
                          <div class="w-1/4 bg-white py-2 border border-[#c79323]">13,200</div>
                          <div class="w-1/4 bg-white py-2 border border-[#c79323]">263,500</div>
                          <div class="w-1/4 bg-white py-2 border border-[#c79323]">罐頭*2</div>
                          <div class="w-1/4 bg-white py-2 border border-[#c79323]">199</div>
                        </div>
                        <div class="mb-6">#使用刷卡和ATM儲值更優惠喔</div>
                        <div class="w-10/12 md:w-1/2 h-auto m-auto my-20">
                          <a href="/deposit?type=giftpack&class=time&packageName=虎課船長禮包" class="px-6 py-2 md:px-6 md:py-4 font-bold bg-[#924e20] rounded-full text-white cursor-pointer border-2 border-[#924e20] shadow-md">前往購買</a>
                        </div>
                        <div class="flex justify-center mb-6">
                          <img src="../assets/gift02.png" alt="">
                        </div>
                        <div class="flex flex-row w-12/12 ">
                          <div class="w-1/4 bg-[#FBBA32] py-2 border border-[#c79323]">金幣</div>
                          <div class="w-1/4 bg-[#FBBA32] py-2 border border-[#c79323]">銀幣</div>
                          <div class="w-1/4 bg-[#FBBA32] py-2 border border-[#c79323]">虛寶</div>
                          <div class="w-1/4 bg-[#FBBA32] py-2 border border-[#c79323]">積分</div>
                        </div>
                        <div class="flex flex-row w-12/12 mb-6">
                          <div class="w-1/4 bg-white py-2 border border-[#c79323]">73,800</div>
                          <div class="w-1/4 bg-white py-2 border  border-[#c79323]">1,469,000</div>
                          <div class="w-1/4 bg-white py-2 border border-[#c79323]">罐頭*5</div>
                          <div class="w-1/4 bg-white py-2 border border-[#c79323]">999</div>
                        </div>
                        <div class="mb-6">#使用刷卡和ATM儲值更優惠喔</div>
                        <div class="w-9/12 md:w-1/2 h-auto m-auto my-20">
                          <a href="/deposit?type=giftpack&class=time&packageName=黃金法老禮包" class="px-6 py-2 md:px-6 md:py-4 font-bold bg-[#924e20] rounded-full text-white cursor-pointer border-2 border-[#924e20] shadow-md">前往購買</a>
                        </div>
                      </div>
                    </h1>
                  </div>
              </div>
              <div class="w-12/12  md:max-w-[800px] m-auto flex justify-center mb-14">
                  <img src="../assets/bottom.png" alt="" class="object-fill z-0">
                  <div class="flex justify-center z-10 "></div>
              </div>
            <!--  -->
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { ref } from 'vue';


export default {
  setup() {
    const tab = ref(1);
    const buttonList = ref([
        { id: 1, label: '每日尋寶活動' },
        { id: 2, label: '祕寶禮包' },
    ])

    const currentTab = (tabNumber) => (tab.value = tabNumber);
    return {
        tab,
        buttonList,
        currentTab,
    };
  },
};
</script>