<!-- Home.vue -->
<template>
  <div >
    首页
    <div class='section' >
      <div>
        <!-- 热门推荐-->
        <!-- Slider main container -->
        <div class="swiper-container" ref="slider1">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper"  >
                <!-- Slides -->
                <router-link  v-for="(slider,index) in sliders" v-bind:key="index"  class="swiper-slide" :to="{name:'BookDetails',params:{id:slider.id}}" tag="div">
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
      </div>
      <!--   快讯-->
      <div class="announcement">
        <label>快讯</label>
        <span>{{announcement}}</span>
      </div>
    </div>
    <div class='section' >
      <!--新书上架-->
      <book-list heading="新书上架" :books="latestupdated"  @onBookSelect="preview($event)" ></book-list>
    </div>
    <div class='section' >
    <!--编辑推荐-->
    <book-list heading="编辑推荐" :books="recommended"  @onBookSelect="preview($event)"></book-list>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'  
  import BookList from './components/BookList'

  const  slider_images = require.context('./assets/sliders' , false , /\.(png|jpg|gif|svg)$/)
  const  cover_images = require.context('./assets/covers' , false , /\.(png|jpg|gif|svg)$/)
  debugger


  export default {
    
    data() {
      return {
        announcement:'今日上架图书全部8折优惠',
        sliders:[
          {id:1,img_url:slider_images("./slider1.jpg")},
          {id:2,img_url:slider_images("./slider2.jpg")},
          {id:3,img_url:slider_images("./slider3.jpg")},
          {id:4,img_url:slider_images("./slider4.jpg")}
        ],
        latestupdated:[
          {
            id:1,
            title: 'vue2 实践揭秘',
            authors: ['梁睿坤','苏炳'],
            img_url:cover_images("./1.svg")
          },
          {
            id:2,
            title: 'vue2 实践揭秘2',
            authors: ['梁睿坤','苏炳'],
            img_url:cover_images("./2.svg")
          }
        ],
        recommended:[
          {
            "id": 1,
            "title": "揭开数据真相：从小白到数据分析达人",
            "authors": [
              "Edward Zaccaro, Daniel Zaccaro"
            ],
            "img_url": cover_images("./1.svg")
          },
          {
            "id": 2,
            "title": "Android 高级进阶",
            "authors": [
              "顾浩鑫"
            ],
            "img_url": cover_images("./2.svg")
          },
          {
            "id": 3,
            "title": "淘宝天猫电商运营与数据化选品完全手册",
            "authors": [
              "老夏"
            ],
            "img_url": cover_images("./3.svg")
          },
          {
            "id": 4,
            "title": "大数据架构详解：从数据获取到深度学习",
            "authors": [
              "朱洁",
              "罗华霖"
            ],
            "img_url": cover_images("./4.svg")
          },
        ]
      }
    },
    methods:{
      preview(book){
        alert("book:"+book.id+", "+book.title+","+book.authors)
      }
    },
    components: {
      BookList
    }
    ,
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
<style scope>
.swiper-container {
    width: 600px;
    height: 300px;
}
.announcement {
  min-height:20px;
  border:1px solid red;
}
</style>
