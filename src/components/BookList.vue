<!-- BookList.vue -->
<template>
  <div class='book-list'>
    <div class='header'>
      <div class='heading'>{{heading}}</div>
      <div class='more'>更多</div>
    </div>
    <div class='book-items'>
      <div class='book' v-for="(book,index) in books" v-bind:key="index"   @click="$emit('onBookSelect',book)" >
        <div class='cover'><img :src='book.img_url'></div>
        <div class='title'>{{book.title}}</div>
        <div class='authors'>{{book.authors | join}}</div>
      </div>          
    </div>
  </div>

</template>
<script>
export default {
  props:["heading","books"],
  filters:{
    join(args){
      return args.join(",")
    }
  }
}
</script>
<style>
.book-list {
  margin: 0 14px;
}
.book-list .header {
    display: table;
    border-bottom: 1px solid #efefef;
  }

  
.book-list .header .heading {
      display: table-cell;
      padding: 12px;
    }

.book-list .header .more {
      display: table-cell;
      text-align: right;
      vertical-align: middle;
      font-size: 10px;
      color: #cccccc;
      padding-right: 14px;
    }

.book-list .book-items {
    display: table;
    padding-top: 12px;
    border: 1px solid blue;
    width:100%;
  }

.book-list .book-items .book {
    font-size: 10px;
    text-align: center;
    float: left;
    width: 33%;
    margin: 12px auto;
    border: 1px solid red;
}

.book-list .book-items .book .title,.cover {
      margin: 5px auto;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;      
    }

.book-list .book-items .book .authors {
      color: #898989;
      margin-top: 10px;
      text-align: left;
      padding-left: 15px;
    }
</style>

