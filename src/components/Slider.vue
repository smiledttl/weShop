<!-- Slider.vue -->
<template>
  <!-- Slider main container -->
        <div class="swiper-container" ref="slider1">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper"  >
                <!-- Slides -->
                <router-link  v-for="(slider,index) in data" v-bind:key="index"  class="swiper-slide" :to="{name:'BookDetails',params:{id:slider.id}}" tag="div">
                  <img :src="slider.img_url" style="width:600px;height:300px;">
                </router-link>             
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination" ref="pagination1" ></div>
        
            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        
            <!-- If we need scrollbar -->
            <div class="swiper-scrollbar"></div>
        </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'  

  export default {
    props:["data"],    
    mounted(){
    new Swiper(this.$refs.slider1, {
      pagination: this.$refs.pagination1,
      paginationClickable:true,
      spaceBetween:30,
      centeredSlides:true,
      autoplay:2500,
      autoplayDisableOnInteraction:true,
       navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  }

  }
</script>
<style></style>

