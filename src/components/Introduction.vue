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
        南投縣長期面臨垃圾處理的困境。透過下方的數據分析，我們可以看到南投縣近年來的垃圾量變化，這也是導致近期各種廢棄物處理設施選址爭議的根本原因。
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