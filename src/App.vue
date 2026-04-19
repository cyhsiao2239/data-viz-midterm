<script setup>
import './style.css' // 引入剛才建立的獨立樣式
import Introduction from './components/Introduction.vue'
import TaiwanTeaMap from './components/TaiwanTeaMap.vue'
import MingjianDetail from './components/MingjianDetail.vue'
import ThreatVisualization from './components/ThreatVisualization.vue'
</script>

<template>
  <div class="site-wrapper">
    <nav class="navbar">
      <div class="logo">🌿 茶鄉的隱形威脅：
南投名間焚化爐預定地與茶葉產區空間疊合分析</div>
      <ul>
        <li><a href="#intro">環境風險</a></li>
        <li><a href="#map">茶金地圖</a></li>
        <li><a href="#mingjian">深入名間</a></li>
        <li><a href="#threat">威脅可視化</a></li>
      </ul>
    </nav>

    <main>
      <Introduction id="intro" />
      <TaiwanTeaMap id="map" />
      <MingjianDetail id="mingjian" />
      <ThreatVisualization id="threat" />
    </main>
    
    <footer>
      <p>© 2026 國立暨南國際大學 資管所 - 第五組 資料視覺化期中報告</p>
    </footer>
  </div>
</template>