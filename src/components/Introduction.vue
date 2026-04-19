<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 對應你提供的森林分布圖 ID
  const divElement = document.getElementById('viz1776604641337');
  const vizElement = divElement.getElementsByTagName('object')[0];
  
  // 設定圖表尺寸
  vizElement.style.width = '100%';
  vizElement.style.height = '600px'; 
  
  // 動態載入 Tableau API
  const scriptElement = document.createElement('script');
  scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
  vizElement.parentNode.insertBefore(scriptElement, vizElement);
})
</script>

<template>
  <section class="intro-content">
    <h2 class="section-title">1. 選址爭議與環境風險</h2>
    
    <div class="card">
      <h3>🌲 森林分布與選址衝擊</h3>
      <p>
        南投縣擁有豐富的林地資源，然而近期的廢棄物處理場（或焚化爐）選址爭議，
        正逐漸威脅這片綠意。透過下方的森林分布圖，我們可以看到潛在的環境風險...
        （你可以補充南投垃圾量分析的數據或文字描述在這裡）
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
    </div>
  </section>
</template>

<style scoped>
.tableau-frame {
  margin-top: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
}
</style>