<!-- BookDetails.vue -->
<template>
  <div >
    图书详情页面 图书ID:{{this.$route.params.id}}
    bookid:{{bookId}}
  </div>
</template>
<script>
let bookId=''
export default {
  data(){
    return{
      bookId: this.$route.params.id
    }

  },
  mounted(){
    debugger
    bookId=this.$route.params.id
  }
}
</script>
<style></style>
