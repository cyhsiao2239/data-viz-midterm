<script setup>
import { onMounted, nextTick } from 'vue'

onMounted(async () => {
  await nextTick()
  
  // --- 1. 載入：作物分布圖 ---
  const vizIdCrop = 'viz1776754244938'; 
  const divCrop = document.getElementById(vizIdCrop);
  if (divCrop) {
    const vizCrop = divCrop.getElementsByTagName('object')[0];
    vizCrop.style.width = '100%';
    vizCrop.style.height = '650px';
    const script1 = document.createElement('script');
    script1.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizCrop.parentNode.insertBefore(script1, vizCrop);
  }

  // --- 2. 載入：物種棲地圖 ---
  const vizIdSpecies = 'viz1776754310008'; 
  const divSpecies = document.getElementById(vizIdSpecies);
  if (divSpecies) {
    const vizSpecies = divSpecies.getElementsByTagName('object')[0];
    vizSpecies.style.width = '100%';
    vizSpecies.style.height = '650px';
    const script2 = document.createElement('script');
    script2.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizSpecies.parentNode.insertBefore(script2, vizSpecies);
  }
})
</script>

<template>
  <section class="detail-content">
    <h2 class="section-title">3. 深入名間：茶鄉的日常與生態</h2>
    
    <div class="card">
      <h3>🌱 在地作物分布與農業現況</h3>
      <p class="analysis-text">
        名間鄉作為重要的農業基地，土地的使用與作物分布直接反映了在地的經濟命脈。透過同學製作的作物分布圖，我們可以清楚看見這片土地的農業結構。
      </p>
      
      <div class="tableau-frame">
        <div class='tableauPlaceholder' id='viz1776754244938' style='position: relative'>
          <noscript>
            <a href='#'>
              <img alt=' ' src='https://public.tableau.com/static/images/3_/3_17767402991290/113/1_rss.png' style='border: none' />
            </a>
          </noscript>
          <object class='tableauViz' style='display:none;'>
            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
            <param name='embed_code_version' value='3' /> 
            <param name='site_root' value='' />
            <param name='name' value='3_17767402991290/113' />
            <param name='tabs' value='yes' />
            <param name='toolbar' value='yes' />
            <param name='static_image' value='https://public.tableau.com/static/images/3_/3_17767402991290/113/1.png' /> 
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

    <div class="card">
      <h3>🐾 土地的守護者：物種棲地紀錄</h3>
      <p class="analysis-text">
        農田不僅是經濟來源，也是許多生物的家。當我們在探討環境威脅時，了解原本棲息在此的物種分佈，能幫助我們更全面地評估開發帶來的生態衝擊。
      </p>
      
      <div class="tableau-frame">
        <div class='tableauPlaceholder' id='viz1776754310008' style='position: relative'>
          <noscript>
            <a href='#'>
              <img alt=' ' src='https://public.tableau.com/static/images/W8/W8QJ4YXPQ/1_rss.png' style='border: none' />
            </a>
          </noscript>
          <object class='tableauViz' style='display:none;'>
            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
            <param name='embed_code_version' value='3' /> 
            <param name='path' value='shared/W8QJ4YXPQ' /> 
            <param name='toolbar' value='yes' />
            <param name='static_image' value='https://public.tableau.com/static/images/W8/W8QJ4YXPQ/1.png' /> 
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