<template>
  <div class="w-screen lg:w-3/4 md:w-3/4 mx-auto">
      <div class="w-12/12 md:max-w-[800px] m-auto flex justify-center">
    <img src="../assets/top.png" alt="" class="object-fill z-0">
  </div>
  <div class="w-12/12  md:max-w-[800px] m-auto flex justify-center bg-imgcenter bg-contain ">
        <div class="z-10 text-center">
            <div class="text-2xl md:text-4xl font-bold mb-10 flex flex-wrap justify-center text-[rgb(88,42,12)]">
                <img src="../assets/icon.svg" alt="" width="30px" class="mx-2">
                活動備註
                <img src="../assets/icon.svg" alt="" width="30px" class="mx-2">
            </div>
            <div class="h-96 m-auto mb-10 w-9/12 md:w-9/12 text-left md:text-left">
                <div class="mb-2">1. 參賽者的活動情形，均以網站實際公佈為準。</div>
                <div class="mb-2">2. 任何得到之獎勵不得要求折抵現金。</div>
                <div class="mb-2">3. 活動截止時，參賽者的獎項由主辦單位做最後認定。</div>
                <div class="mb-2">4. 獎勵發放以活動、點數期間的收益為基準，不以過往累積收益計算</div>
                <div class="mb-2">5. 所有獎金、獎品與其它獎勵，發放時間及領取規則以官方宣布為主。</div>
                <div class="mb-2">6. 若對活動辦法及獎項有任何疑問，歡迎來信</div>
                <div class="mb-2">7. 主辦方保有修改、變更及解釋活動之權利，最終決定權由GPG官方認定。</div>
            </div>
            <a class="px-6 py-2 md:px-6 md:py-4 font-bold bg-[#924e20] rounded-full text-white cursor-pointer border-2 border-[#924e20] shadow-md" href="/">回到GPG</a>
        </div>
  </div>
  <div class="w-12/12  md:max-w-[800px] m-auto flex justify-center mb-14">
    <img src="../assets/bottom.png" alt="" class="object-fill z-0">
  </div>
  </div>
</template>

<script>
import IconHome from '~icons/heroicons-outline/globe-alt'
import IconHeart from '~icons/mdi/heart-circle'

export default {
  components: {
    IconHome,
    IconHeart,
  },
}

</script>

<style>

</style>