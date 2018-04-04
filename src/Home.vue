<!-- Home.vue -->
<template>
  <div >
    首页
    <div class='section' >
      <div>
      <!-- 热门推荐-->
      <!-- Slider main container -->
      <div class="swiper-container">
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
              <!-- Slides -->
              <div class="swiper-slide">Slide 1</div>
              <div class="swiper-slide">Slide 2</div>
              <div class="swiper-slide">Slide 3</div>
              ...
          </div>
          <!-- If we need pagination -->
          <div class="swiper-pagination"></div>
      
          <!-- If we need navigation buttons -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
      
          <!-- If we need scrollbar -->
          <div class="swiper-scrollbar"></div>
      </div>
      <!--   快讯-->
      </div>
    </div>
    <div class='section' >
    <!--新书上架-->
    </div>
    <div class='section' >
    <!--编辑推荐-->
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
   const mySwiper = new Swiper ('.swiper-container')
export default {
}
</script>
<style>
.swiper-container {
    width: 600px;
    height: 300px;
    border:
}
</style>
