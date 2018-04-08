<!-- MainComponent.vue -->
<template>
  <div >
    主视图
    <div class="content">
      <transition name="slide-face">
      <router-view></router-view>
      </transition>
    </div>
    
    <div>
      <ul>        
        <router-link :to="{name:'Home'}" tag="li" >
          <div><img src="./assets/images/home.png"  style="width:75px;height:54px;"></div>            
        </router-link>        
        <router-link :to="{name:'Categories'}" tag="li">
          <div><img src="./assets/images/category.png" style="width:75px;height:54px;"></div>
        </router-link>
        <router-link :to="{name:'ShoppingCart'}" tag="li">
          <div><img src="./assets/images/cart.png" style="width:75px;height:54px;"></div>
        </router-link>        
        <router-link :to="{name:'Me'}" tag="li">
          <div><img src="./assets/images/my.png" style="width:75px;height:54px;"></div>
        </router-link>        
      </ul>
      <!-- <p><router-link :to="{name:'BookDetails',params:{id:1}}">图书详情1</router-link></p>
      <p><router-link :to="{name:'BookDetails',params:{id:2}}">图书详情1</router-link></p> -->
    </div>
  </div>
</template>
<script>
export default {
  /* created () {
    debugger
    const i=0
  } */
}
</script>
<style scope>
  .active{
    background:red;
  }
  .slide-face-enter-active {
    transform: all .3s ease;
  }
  .slide-face-leave-active {
    transform: all .3s cubiz-bezier(1.0,0.5,0.8,1.0);
  }
  .slide-face-enter,.slide-face-leave-active{
    transform:translateX(-430px);
    opacity:0;
  }
</style>

