<script setup>
import { onMounted, nextTick } from 'vue'

onMounted(async () => {
  await nextTick()
  
  // --- 1. 載入南投垃圾量分析圖 ---
  const vizIdGarbage = 'viz1776752459884'; 
  const divGarbage = document.getElementById(vizIdGarbage);
  if (divGarbage) {
    const vizGarbage = divGarbage.getElementsByTagName('object')[0];
    vizGarbage.style.width = '100%';
    vizGarbage.style.height = '650px';
    const script1 = document.createElement('script');
    script1.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizGarbage.parentNode.insertBefore(script1, vizGarbage);
  }

  // --- 2. 載入森林分布圖 ---
  const vizIdForest = 'viz1776604641337'; 
  const divForest = document.getElementById(vizIdForest);
  if (divForest) {
    const vizForest = divForest.getElementsByTagName('object')[0];
    vizForest.style.width = '100%';
    vizForest.style.height = '650px';
    const script2 = document.createElement('script');
    script2.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizForest.parentNode.insertBefore(script2, vizForest);
  }
})
</script>

<template>
  <section class="intro-content">
    <h2 class="section-title">1. 選址爭議與環境風險</h2>
    
    <div class="card">
      <h3>🗑️ 南投縣的垃圾危機</h3>
      <p class="analysis-text">
        在台灣，手搖飲早已成為日常文化的一部分，財政部統計顯示，全台每年消耗約10.7億杯。支撐這龐大產值的核心基石，正是來自南投縣名間鄉。名間鄉擁有全台40%的茶園面積，供應市面上約九成的茶葉原料，堪稱手搖飲產業的命脈。
        </p>

      <p class="analysis-text">
        然而，這片支撐百億產值的茶葉產業鏈，如今卻面臨一項即將到來的環境設施——「南投縣垃圾處理及再生能源中心（焚化爐）」的直接衝擊。

南投縣長期面臨垃圾處理困境，數據顯示近年垃圾量持續攀升，迫使縣府尋求新的解決方案。選址於名間鄉，正是基於這樣的現實壓力。然而，這項決策卻可能對茶葉產業與當地生態造成不可逆的傷害，使「垃圾處理」與「茶葉命脈」之間形成尖銳的矛盾。
我們計畫透過數據視覺化與空間分析，探討在經濟產值與環境風險之間，是否存在共榮的第三條路。      
</p>
      <p class="analysis-text">
        透過這份垃圾量分析圖，我們可以清楚看到南投垃圾量的增長趨勢，進一步理解為何縣府選擇在名間鄉設置焚化爐。
      </p>
      
      <div class="tableau-frame">
        <div class='tableauPlaceholder' id='viz1776752459884' style='position: relative'>
          <noscript>
            <a href='#'>
              <img alt=' ' src='https://public.tableau.com/static/images/_1/_17767456707530/sheet5/1_rss.png' style='border: none' />
            </a>
          </noscript>
          <object class='tableauViz' style='display:none;'>
            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
            <param name='embed_code_version' value='3' /> 
            <param name='site_root' value='' />
            <param name='name' value='_17767456707530/sheet5' />
            <param name='tabs' value='yes' />
            <param name='toolbar' value='yes' />
            <param name='static_image' value='https://public.tableau.com/static/images/_1/_17767456707530/sheet5/1.png' /> 
            <param name='animate_transition' value='yes' />
            <param name='display_static_image' value='yes' />
            <param name='display_spinner' value='yes' />
            <param name='display_overlay' value='yes' />
            <param name='display_count' value='yes' />
            <param name='language' value='zh-TW' />
          </object>
        </div>
      </div>

<p class="analysis-text">
    南投縣民眾的資源回收率已穩定維持在六成左右，但一般垃圾產生量仍持續增加。
    這顯示單靠前端的「源頭減量」，已難以填補末端處理量能的巨大缺口。
  </p>

    <p class="analysis-text">
    交叉比對「一般廢棄物產生量」與「公害陳情案件總數」後發現，兩者並非絕對正相關。
    環境民怨的核心，往往不是垃圾量本身，而是垃圾「無法順利外運」造成的長期堆積與氣味問題。
  </p>

  <p class="analysis-text">
    南投縣目前沒有自主焚化設施，長期仰賴苗栗、台中、彰化等縣市代燒。
    然而，台中與彰化焚化廠的處理量長期高於全台中位數，顯示其本身已處於高負載狀態。
    當外縣市設備歲修或垃圾量暴增時，南投垃圾往往成為最先被退運的對象。
  </p>

    </div>

    <div class="card">
      <h3>🌲 森林分布與選址衝擊</h3>
      <p class="analysis-text">
        為了解決垃圾問題而提出的選址方案，卻可能對南投豐富的林地資源造成另一種隱形威脅。透過森林分布圖與選址點的疊合，環境風險一目了然。
      </p>
      
      <div class="tableau-frame">
        <div class='tableauPlaceholder' id='viz1776604641337' style='position: relative'>
          <noscript>
            <a href='#'>
              <img alt='森林分布圖 ' src='https://public.tableau.com/static/images/_1/_17766043428500/sheet0/1_rss.png' style='border: none' />
            </a>
          </noscript>
          <object class='tableauViz' style='display:none;'>
            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
            <param name='embed_code_version' value='3' /> 
            <param name='site_root' value='' />
            <param name='name' value='_17766043428500/sheet0' />
            <param name='tabs' value='no' />
            <param name='toolbar' value='yes' />
            <param name='static_image' value='https://public.tableau.com/static/images/_1/_17766043428500/sheet0/1.png' /> 
            <param name='animate_transition' value='yes' />
            <param name='display_static_image' value='yes' />
            <param name='display_spinner' value='yes' />
            <param name='display_overlay' value='yes' />
            <param name='display_count' value='yes' />
            <param name='language' value='zh-TW' />
            <param name='filter' value='publish=yes' />
          </object>
        </div>
      </div>

<p class="analysis-text">
    南投擁有全台最豐富的林地資源，但也因此限制了大型設施的選址空間。
    透過森林分佈圖與選址點疊合分析，我們發現一個嚴峻的地理衝突。
  </p>

<p class="analysis-text">
    環保局曾針對境內 5 個鄉鎮市、6 處潛在廠址進行評估，
    包含名間外埔、河川地、竹山香員腳、南投市福德段、草屯南坪段及國姓黑樹林。
    這些地點各自面臨不同的環境與社會挑戰。
  </p>

<p class="analysis-text">
    南投絕大部分為林地，若往山區開發，將面臨大規模砍伐林地的風險；
    若選址於平地（如名間鄉、南投市），則必然與人口稠密區或高經濟價值的農業精華區「零距離」接觸。
    數據顯示，南投幾乎不存在「毫無爭議」的興建地點。
  </p>
    </div>
  </section>
</template>

<style scoped>
.analysis-text {
  line-height: 1.8;
  color: #555;
  margin-bottom: 20px;
}

.tableau-frame {
  margin-top: 20px;
  background: #f9f9f9;
  border: 1px solid #e8f5e9;
  border-radius: 8px;
  overflow: hidden;
}
</style>