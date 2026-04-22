<script setup>
import { onMounted, nextTick } from 'vue'

onMounted(async () => {
  await nextTick()
  
  // --- 1. 載入：作物分布圖 ---
  const vizIdCrop = 'viz1776868571882'; 
  const divCrop = document.getElementById(vizIdCrop);
  if (divCrop) {
    const vizCrop = divCrop.getElementsByTagName('object')[0];
    vizCrop.style.width = '100%';
    vizCrop.style.height = '650px';
    const script1 = document.createElement('script');
    script1.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizCrop.parentNode.insertBefore(script1, vizCrop);
  }

  // --- 2. 載入：測試替換的圖表 (原物種棲地位置) ---
  const vizIdSpecies = 'viz1776869376011'; 
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
      <h3>📊 為什麼是名間鄉？南投產量大解密</h3>
      <p class="analysis-text">
        當我們將目光聚焦到南投縣內部，會發現驚人的事實：名間鄉的茶葉產量（4,772,218公斤）佔了整個南投縣過半的比例。這片土地不僅是全台最大的茶區，也因此面臨著最嚴峻的環境承載壓力。
      </p>
      <div class="image-frame">
        <img src="../assets/nantou-tea.jpg" alt="南投鄉鎮茶葉產量比較" class="static-img" />
      </div>

      <p class="analysis-text">
        名間鄉作為重要的農業基地，土地的使用與作物分布直接反映了在地的經濟命脈。透過同學製作的「作物收量甜甜圈圖」，我們可以清楚看見這片土地豐富的農業結構。南投縣整體的農產收量極為驚人（年度總收量超過 11 億公斤），除了最具代表性的茶葉，更涵蓋了苗圃、紅龍果、香蕉、休閒農業等多樣化的高經濟作物。這意味著，焚化爐潛在的環境風險，波及的將不只是單一茶業，而是牽動著整個龐大且脆弱的農業生態圈。
      </p>

      <div class="tableau-frame">
        <div class='tableauPlaceholder' id='viz1776868571882' style='position: relative'>
          <noscript>
            <a href='#'><img alt=' ' src='https://public.tableau.com/static/images/3_/3_17767402991290/113/1_rss.png' style='border: none' /></a>
          </noscript>
          <object class='tableauViz' style='display:none;'>
            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
            <param name='embed_code_version' value='3' /> 
            <param name='site_root' value='' />
            <param name='name' value='3_17767402991290&#47;113' />
            <param name='tabs' value='yes' />
            <param name='toolbar' value='yes' />
            <param name='static_image' value='https://public.tableau.com/static/images/3_/3_17767402991290/113/1.png' /> 
            <param name='animate_transition' value='yes' />
            <param name='display_static_image' value='yes' />
            <param name='display_spinner' value='yes' />
            <param name='display_overlay' value='yes' />
            <param name='display_count' value='yes' />
            <param name='language' value='en-US' />
          </object>
        </div>
      </div>

      <p class="analysis-text">
        進一步觀察「期作分布」板塊圖，我們能發現一個更深層的隱憂。在農業統計中，作物種植分為全年、裡作、一期作、二期作等不同週期 。從圖表中可以明顯看出，包含名間鄉、竹山鎮在內的農業重鎮，其佔據最大面積的區塊皆為「全年」作物（如茶樹、果樹等長期作物）。
      </p>

       <p class="analysis-text">
       「全年作物」代表著這些農產一年四季都扎根於同一片土地上，持續吸收當地的水文與大氣資源。它們無法像短期葉菜類一樣輕易休耕或轉移陣地。一旦焚化爐的運作帶來大氣落塵、戴奧辛沉降或水質改變，這些長期暴露在環境中的「全年作物」將首當其衝，承受最直接且難以逆轉的累積性污染風險。這也是在地農民對這項高風險設施感到極度恐慌的核心原因。
      </p>
    </div>
    
    <div class="card">
      <h3>🐾 土地的守護者：物種棲地紀錄</h3>
      <p class="analysis-text">
        當我們在探討環境威脅時，若只關注「經濟損失」與「人類生活」，往往會遺漏環境評估中極為重要的一環——生態衝擊。事實上，名間鄉廣大的農田與淺山環境，不僅是在地居民賴以維生的經濟命脈，更是許多野生生物遮風避雨的家。
      </p>
      
      <div class="tableau-frame">
        <div class='tableauPlaceholder' id='viz1776869376011' style='position: relative'>
          <noscript>
            <a href='#'><img alt=' ' src='https://public.tableau.com/static/images/2_/2_17767068122730/sheet0/1_rss.png' style='border: none' /></a>
          </noscript>
          <object class='tableauViz' style='display:none;'>
            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
            <param name='embed_code_version' value='3' /> 
            <param name='path' value='views/2_17767068122730/sheet0?:language=zh-TW&amp;:embed=true&amp;:sid=&amp;:redirect=auth' /> 
            <param name='toolbar' value='yes' />
            <param name='static_image' value='https://public.tableau.com/static/images/2_/2_17767068122730/sheet0/1.png' /> 
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
        透過這張「物種分布圖」，我們將視角切換至生態維度。圖表中的圓點大小代表了物種紀錄的數量與頻率。我們可以非常直觀地看到，在名間鄉及其周邊區域，密布著代表「石虎」的綠色大圓點。這項客觀數據明確指出了名間鄉不僅是茶業重鎮，更是台灣一級保育類動物——石虎高度活躍的重要棲息熱區。
      </p>

      <p class="analysis-text">
        焚化爐等大型公共設施的進駐，帶來的威脅絕對不僅止於空氣落塵與水質污染的物理性改變。設施開發期間的整地破壞、營運期間的光害與噪音，以及未來每日頻繁進出的重型垃圾車輛，都將對原本棲息於此的石虎與其他敏感物種（如圖中零星標示的特有鳥類等）造成巨大的生存壓迫與路殺風險。

        這張生態地圖無聲卻強烈地提醒我們：在評估任何大型開發案時，我們必須將這些無聲的生態住民納入考量。面對具備如此高生態敏感度的區域，開發單位是否具備足夠嚴謹的生態迴避、縮小、減輕及補償對策？這是我們必須共同持續監督的課題。
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