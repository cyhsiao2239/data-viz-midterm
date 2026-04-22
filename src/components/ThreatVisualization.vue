<script setup>
// 引入 Vue 的 onMounted 函數，確保網頁元素載入後才執行 Tableau 的腳本
import { onMounted } from 'vue'

onMounted(() => {
  // 這裡就是你原本提供的那段 Tableau JavaScript
  const divElement = document.getElementById('viz1776603932744');
  if (divElement) {
    const vizElement = divElement.getElementsByTagName('object')[0];
    
    // 設定寬高，讓它適應我們的網頁框架
    vizElement.style.width = '100%';
    vizElement.style.height = '600px'; 
    
    // 動態載入 Tableau 的 API
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }
})
</script>

<template>
  <section class="threat-content">
    <h2 class="section-title">4. 威脅可視化：數據背後的環境代價</h2>
    
    <div class="card">
      <h3>💧 水文影響分析 (焚化爐對濁水溪流域影響)</h3>
      <p class="analysis-text">當我們將視角轉向地表水文，環境風險的範圍便有了更具體的輪廓。這張水文影響分析圖，說明焚化爐選址對水資源的潛在衝擊。</p>
      
      <div class="image-frame">
        <img src="../assets/water.jpg" alt="焚化爐興建預定地示意圖" class="static-img" />
      </div>
      
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

      <p class="analysis-text">在圖面上，我們以焚化爐預定地為中心，劃出了一個半徑5公里的紅色緩衝區。這裡的水文影響是採用5公里半徑來做的。選擇這個範圍並非隨意圈列，是因為5公里符合台灣環評法規二級影響區標準，這能涵蓋污染物在水文與空氣中的沈降範圍。</p>
      
      <p class="analysis-text">圖層呈現上就是顯示焚化爐、濁水溪與村里界的交集與還有下游影響。從疊合結果可以清楚看見，這5公里的威脅圈不僅涵蓋了名間鄉密集的村落，其邊緣更直接碰觸到了台灣中部最重要的水脈——濁水溪流域。</p>
      
      <p class="analysis-text">名間鄉位於濁水溪流域。一旦焚化爐發生污染物洩漏（如底渣滲出水），這些污染物會順著地形匯入支流，最終影響到下游區域 。更值得注意的是，該水系緊鄰八堡圳取水口，長期供應中部約四至六萬公頃農地灌溉 。一旦發生滲漏、落塵或操作事故，影響恐不僅限於名間鄉，而可能波及整個中部農業生產區。汙染並非只是南投的事情。焚化爐選址的環境代價，將可能由整個濁水溪下游的縣市共同承擔。</p>
    </div>
  </section>

  <section class="conclusion-content">
    <h3>結論與展望：在數據中尋找第三條路</h3>
    <p class="analysis-text">
      南投名間焚化爐爭議並非單純的「鄰避效應」，而是一場複雜的空間、經濟與環境博弈。
      透過數據，我們看見這場衝突背後的兩難與可能的解套方向。
    </p>

    <p class="analysis-text">
      【正方觀點：現實的生存痛點】  
      南投長年受制於外部代燒量能的緊繃，垃圾無處去化的危機已是現在進行式。
      建立自主的廢棄物處理中心，是解決縣內環境衛生惡化、降低龐大外運成本的必要之惡。  
      <br><br>
      【反方觀點：不可逆的系統風險】  
      預定地緊鄰全台最重要的茶產區、濁水溪灌溉水脈，以及石虎的密集棲地。
      即使排放符合法規，只要市場對茶葉產生「污染疑慮」，百億產值的品牌信任度將瞬間瓦解，
      其長遠經濟與生態代價可能遠大於處理垃圾的效益。
    </p>

    <p class="analysis-text">
      面對「發展設施」與「保存環境」的僵局，南投不必僅限於「蓋與不蓋」的二選一。
      數據分析提供了以下三個可行方向：
    </p>
    <p class="analysis-text">
      1. <strong>技術轉型</strong>  
      比起傳統高溫焚化爐，南投可針對高比例的農業與民生廢棄物，
      評估引入 <em>SRF（固體再生燃料）</em> 技術，或建立大型 <em>厭氧發酵生質能廠</em>。
      此舉能從源頭改變垃圾處理結構，降低大氣擴散與農地落塵壓力。
    </p>
    <p class="analysis-text">
      2. <strong>跨域治理</strong>  
      污染與水源沒有縣市界線。中央政府可協調資源交換，
      讓南投以「提供生態補償或特定資源」的方式，
      換取鄰近具備優良擴散條件（如沿海平原）縣市的穩定垃圾代處理額度，
      形成真正的區域互助。
    </p>
    <p class="analysis-text">
      3. <strong>信任機制</strong>  
      若最終仍需建廠，政府應導入「超法規」的管理機制。
      例如建立由在地茶農與環保團體共同監督的 <em>即時公開數據平台</em>，
      並設立專屬的 <em>農業品牌保證基金</em>，作為抵禦市場信心危機的後盾。
    </p>
  </section>
</template>

<style scoped>
/* 統一文字段落樣式 */
.analysis-text {
  line-height: 1.8;
  color: #555;
  margin-bottom: 20px;
}

/* 圖片外框樣式 */
.image-frame {
  margin: 20px 0;
  text-align: center;
  background: #f9fbf9;
  border: 1px solid #e8f5e9;
  border-radius: 8px;
  padding: 15px;
}

/* 靜態圖片樣式 */
.static-img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

/* Tableau 圖表外框樣式 */
.tableau-frame {
  margin-top: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden; /* 防止邊角超出版面 */
}
</style>