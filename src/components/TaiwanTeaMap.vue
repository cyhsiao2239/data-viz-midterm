<script setup>
import { onMounted, nextTick } from 'vue'

onMounted(async () => {
  await nextTick()
  
  // 對應你提供的正確圖表 ID
  const vizId = 'viz1776755129805'; 
  const divElement = document.getElementById(vizId);
  
  if (divElement) {
    const vizElement = divElement.getElementsByTagName('object')[0];
    
    // 設定寬度與高度，讓畫面適應網頁版面
    vizElement.style.width = '100%';
    vizElement.style.height = '750px'; 
    
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }
})
</script>

<template>
  <section class="map-content">
    <h2 class="section-title">2. 全台茶金地圖：產業分佈與外銷趨勢</h2>
    
    <div class="card">
      <h3>🍵 台灣茶葉產值與經濟版圖</h3>
      <p class="analysis-text">
        茶葉是台灣重要的經濟作物之一。透過這份地圖與數據儀表板，我們能總覽各縣市的茶葉產值變化以及外銷趨勢，進一步理解為何南投「名間鄉」在台灣茶產業中扮演著不可或缺的關鍵角色。
      </p>
      
      <div class="tableau-frame">
        <div class='tableauPlaceholder' id='viz1776755129805' style='position: relative'>
          <noscript>
            <a href='#'>
              <img alt=' ' src='https://public.tableau.com/static/images/2_/2_17767544309380/sheet0/1_rss.png' style='border: none' />
            </a>
          </noscript>
          <object class='tableauViz' style='display:none;'>
            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
            <param name='embed_code_version' value='3' /> 
            <param name='site_root' value='' />
            <param name='name' value='2_17767544309380/sheet0' />
            <param name='tabs' value='yes' />
            <param name='toolbar' value='yes' />
            <param name='static_image' value='https://public.tableau.com/static/images/2_/2_17767544309380/sheet0/1.png' /> 
            <param name='animate_transition' value='yes' />
            <param name='display_static_image' value='yes' />
            <param name='display_spinner' value='yes' />
            <param name='display_overlay' value='yes' />
            <param name='display_count' value='yes' />
            <param name='language' value='zh-TW' />
          </object>
        </div>
      </div>
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