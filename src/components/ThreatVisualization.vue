<script setup>
// 引入 Vue 的 onMounted 函數，確保網頁元素載入後才執行 Tableau 的腳本
import { onMounted } from 'vue'

onMounted(() => {
  // 這裡就是你原本提供的那段 Tableau JavaScript
  const divElement = document.getElementById('viz1776603932744');
  const vizElement = divElement.getElementsByTagName('object')[0];
  
  // 設定寬高，讓它適應我們的網頁框架
  vizElement.style.width = '100%';
  vizElement.style.height = '600px'; 
  
  // 動態載入 Tableau 的 API
  const scriptElement = document.createElement('script');
  scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
  vizElement.parentNode.insertBefore(scriptElement, vizElement);
})
</script>

<template>
  <section class="threat-content">
    <h2 class="section-title">4. 威脅可視化：數據背後的環境代價</h2>
    
    <div class="card">
      <h3>💧 水文影響分析 (焚化爐對濁水溪流域影響)</h3>
      <p>名間鄉的茶園與水源息息相關。透過數據觀察，我們可以發現...</p>
      
      <div class="tableau-frame">
        <div class='tableauPlaceholder' id='viz1776603932744' style='position: relative'>
          <noscript>
            <a href='#'>
              <img alt='焚化爐對濁水溪流域影響 ' src='https://public.tableau.com/static/images/_1/_17766038872210/sheet0/1_rss.png' style='border: none' />
            </a>
          </noscript>
          <object class='tableauViz' style='display:none;'>
            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
            <param name='embed_code_version' value='3' /> 
            <param name='site_root' value='' />
            <param name='name' value='_17766038872210/sheet0' />
            <param name='tabs' value='no' />
            <param name='toolbar' value='yes' />
            <param name='static_image' value='https://public.tableau.com/static/images/_1/_17766038872210/sheet0/1.png' /> 
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
  overflow: hidden; /* 防止邊角超出版面 */
}
</style>