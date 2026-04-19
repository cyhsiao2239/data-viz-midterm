<script setup>
import { onMounted, nextTick } from 'vue'

onMounted(async () => {
  // 等待 Vue 把 HTML 畫面都畫好
  await nextTick()
  
  const vizId = 'viz1776605394652'; 
  const divElement = document.getElementById(vizId);
  
  // 加上保護機制：如果真的有找到這個 div，才執行 Tableau 的載入
  if (divElement) {
    const vizElement = divElement.getElementsByTagName('object')[0];
    
    // 設定寬度與高度
    vizElement.style.width = '100%';
    vizElement.style.height = '800px';
    
    // 載入 Tableau 腳本
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  } else {
    console.error('找不到 Tableau 的容器，請檢查 ID 是否正確。');
  }
})
</script>

<template>
  <section class="detail-content">
    <h2 class="section-title">3. 深入名間：茶鄉的日常與挑戰</h2>
    
    <div class="card">
      <h3>💰 種植面積與成本收益</h3>
      <p class="analysis-text">
        名間鄉是全台灣茶葉產量最高的地區之一。在這裡，我們透過數據分析茶農的投入成本與實際營收，探討在環境威脅下，在地產業的經濟韌性。
        <br><span style="color: #ff9800; font-size: 0.9em;">（備註：下方目前為版面測試用之暫存儀表板，待團隊成員完成專屬圖表後替換）</span>
      </p>
      
      <div class="tableau-frame">
        <div class='tableauPlaceholder' id='viz1776605394652' style='position: relative'>
          <noscript>
            <a href='#'>
              <img alt='2582 ' src='https://public.tableau.com/static/images/Z8/Z8R3R52ZS/1_rss.png' style='border: none' />
            </a>
          </noscript>
          <object class='tableauViz' style='display:none;'>
            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
            <param name='embed_code_version' value='3' /> 
            <param name='path' value='shared/Z8R3R52ZS' /> 
            <param name='toolbar' value='yes' />
            <param name='static_image' value='https://public.tableau.com/static/images/Z8/Z8R3R52ZS/1.png' /> 
            <param name='animate_transition' value='yes' />
            <param name='display_static_image' value='yes' />
            <param name='display_spinner' value='yes' />
            <param name='display_overlay' value='yes' />
            <param name='display_count' value='yes' />
            <param name='language' value='en-US' />
          </object>
        </div>
      </div>
    </div>

    <div class="card">
      <h3>🐾 土地的守護者：物種紀錄</h3>
      <p class="analysis-text">
        茶園不僅是農田，也是許多在地生物的棲息地。透過物種紀錄的調查，我們能更全面地理解環境風險對生物多樣性的影響。
      </p>
      <div class="species-grid">
        <div class="species-item">
          <div class="species-icon">🌿</div>
          <h4>在地原生種</h4>
          <p>觀察紀錄待補...</p>
        </div>
        <div class="species-item">
          <div class="species-icon">🐜</div>
          <h4>生態指標</h4>
          <p>環境品質回饋待補...</p>
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

.species-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
}

.species-item {
  background: #f1f8e9;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #e8f5e9;
}

.species-icon {
  font-size: 2rem;
  margin-bottom: 10px;
}
</style>