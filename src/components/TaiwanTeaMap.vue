<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 對應你提供的預位圖表 ID: viz1776604998134
  const divElement = document.getElementById('viz1776604998134');
  const vizElement = divElement.getElementsByTagName('object')[0];
  
  // 設定適應寬度，高度建議維持在 700px~900px 之間以符合原圖比例
  vizElement.style.width = '100%';
  vizElement.style.height = '800px'; 
  
  const scriptElement = document.createElement('script');
  scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
  vizElement.parentNode.insertBefore(scriptElement, vizElement);
})
</script>

<template>
  <section class="map-content">
    <h2 class="section-title">2. 全台茶金地圖</h2>
    
    <div class="card">
      <h3>🍵 產業產值與分佈預覽 (暫存位)</h3>
      <p>
        此區塊由團隊成員負責開發中。未來將呈現全台茶產業的產值泡泡圖與外銷趨勢分析，
        探討茶業經濟在各縣市的消長情形。目前先以樣本儀表板進行版面配置測試。
      </p>
      
      <div class="tableau-frame">
        <div class='tableauPlaceholder' id='viz1776604998134' style='position: relative'>
          <noscript>
            <a href='#'>
              <img alt='本文 1 ' src='https://public.tableau.com/static/images/_1/_16498435228620/1_1/1_rss.png' style='border: none' />
            </a>
          </noscript>
          <object class='tableauViz' style='display:none;'>
            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
            <param name='embed_code_version' value='3' /> 
            <param name='path' value='views/_16498435228620/1_1?:language=zh-TW&amp;:embed=true&amp;:sid=&amp;:redirect=auth' /> 
            <param name='toolbar' value='yes' />
            <param name='static_image' value='https://public.tableau.com/static/images/_1/_16498435228620/1_1/1.png' /> 
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
.tableau-frame {
  margin-top: 20px;
  border: 1px solid #e8f5e9;
  border-radius: 8px;
  overflow: hidden;
  background-color: #f9fbf9;
}
</style>