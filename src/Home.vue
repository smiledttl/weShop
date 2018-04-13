<!-- Home.vue -->
<template>
  <div >
    首页
    <div class='section' >
      <div>
        <!-- 热门推荐-->
        <slider :data="page_data.sliders"></slider>
      </div>
      <!--   快讯-->
      <div class="announcement">
        <label>快讯</label>
        <span>{{page_data.announcement}}</span>
      </div>
    </div>
    <div class='section' >
      <!--新书上架-->
      <book-list heading="新书上架" :books="page_data.latestupdated"  @onBookSelect="preview($event)" ></book-list>
    </div>
    <div class='section' >
    <!--编辑推荐-->
    <book-list heading="编辑推荐" :books="page_data.recommended"  @onBookSelect="preview($event)"></book-list>
    </div>
    <modal-dialog ref="dialog" @dialogClose="selected=undefined">
      <div slot="header">
        <div class="dismiss" 
        @click.prevent="$refs.dialog.close()" >X
        </div>
      </div>
      <div v-if="selected">
        <div><img :src="selected.img_url" /></div>
        <div>{{selected.title}}</div>
      </div>
    </modal-dialog>
  </div>
</template>
<script>  
  import BookList from './components/BookList'
  import Slider from './components/Slider'
  import ModalDialog from './components/Dialog'
  import Faker from './fixtures/faker'

  const isDebugger=process.env.NODE_ENV !== 'production'

  export default {
    
    data() {
      return {
        page_data:undefined,
        selected:{undefined}
        /* announcement:'',
        sliders:[],
        latestupdated:[],
        recommended:[] */
      }
    },
    created () {        
        if (isDebugger){
          const fakerData=Faker.getHomeData()
          this.page_data=fakerData
        } else {
          this.$http.get('/home').then(res=>{
            this.announcement = res.body.announcement;
            this.sliders = res.body.sliders;
            this.latestupdated = res.body.latestupdated;
            this.recommended = res.body.recommended; 
          },(error)=>{
            console.log('load data failer:${error}')
          })
        }
    },
    methods:{
      preview(book){
        //alert("book:"+book.id+", "+book.title+","+book.authors)
        this.selected=book
        this.$refs.dialog.open()
      }
    },
    components: {
      BookList,
      Slider,
      ModalDialog
    }
}
</script>
<style scope>
.swiper-container {
    width: 780px;
    height: 300px;
}
.announcement {
  min-height:20px;
  border:1px solid red;
}
.dismiss {
  /*border:1px solid red;*/
  text-align: right;
  padding-right:15px;
}
</style>
