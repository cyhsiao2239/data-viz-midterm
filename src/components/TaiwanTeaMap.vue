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
      <h3>🗺️ 2024年 全台茶葉產量分布</h3>
      <p class="analysis-text">
        從最新的數據可以看出，台灣茶葉的生產重鎮高度集中於中部地區，其中又以南投縣（8,859噸）位居全台之冠，遠超其他縣市。
      </p>
      <div class="image-frame">
        <img src="../assets/taiwan-tea.jpg" alt="全台茶葉產量" class="static-img" />
      </div>
    </div>
    
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

 <p class="analysis-text">
        除了茶葉，這片土地還孕育了哪些資源？透過作物分析的樹狀圖，我們可以直觀地了解當地的農業種植佔比與多樣性 。雖然茶葉在名間鄉佔有極大的版圖，但洋菇、金針菇等作物同樣是支撐地方經濟的重要命脈，這顯示了該區域作為「特定農業區」的密集開發與農業價值。
      </p>

      <p class="analysis-text">
        回到茶葉產業本身，採收方式直接決定了產業的經濟體質 。透過趨勢圖的比對，我們呈現了「機採」與「手採」在近年來的成本與利潤變化 。機採雖然能有效控制人力成本並提高產量，但手採茶在精緻化市場中仍維持著較高的總收入，這反映了當地茶農在「規模經濟」與「品質溢價」之間的策略平衡。
      </p>

      <p class="analysis-text">
        如果我們將視角從「地方」拉高到「全球貿易」，會發現一個顛覆直覺的客觀事實。圖表顯示，台灣雖然持續外銷茶葉，但同時也從越南、斯里蘭卡等地大量進口茶葉 。
      </p>

       <p class="analysis-text">
        為什麼？根據農業部資料，全天茶葉消費量近3年來每年平均約3.4萬公噸，其中進口茶占了近80%，
        這也意味著台灣茶葉生產商的市占率不到20％。這種「內需大於供給」的結構性矛盾，讓台灣茶產業在面對外部衝擊（如氣候變遷、土地開發）時，顯得格外脆弱。
      </p>

         <p class="analysis-text">
        若我們以最冷靜、客觀的數據角度來評估「焚化爐對茶飲市場的威脅」：即便名間鄉的茶葉產區真的因為環境因素而受到衝擊，由於整體下游飲料市場已高度依賴進口茶葉填補缺口，台灣整體的茶飲產業鏈或許不會因此面臨崩潰 。然而，對於名間鄉的茶農來說，這樣的衝擊卻是直接且無法迴避的。當地的茶葉產值占全台的九成以上，一旦產區受到污染或土地被徵收，這些茶農將面臨生計崩盤的風險，而這種「局部崩盤」對於整體產業鏈的影響，則是難以量化但卻真實存在的威脅。
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

.image-frame {
  margin-top: 20px;
  text-align: center;
  background: #f9fbf9;
  border: 1px solid #e8f5e9;
  border-radius: 8px;
  padding: 15px;
}

.static-img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
</style>