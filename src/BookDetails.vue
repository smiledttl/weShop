<!-- BookDetails.vue -->
<template>
  <div >
    图书详情页面 图书ID:{{this.$route.params.id}}
    bookid:{{bookId}}
  </div>
</template>
<script>
export default {
  created(){
    debugger
    const bookId=this.$route.params.id
  }
}
</script>
<style></style>
