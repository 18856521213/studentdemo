<template>
  <div class="hello">
  </div>
</template>

<script>
import { shiyan, time } from '@/api/index.js'
export default {
  name: 'HelloWorld',
  data() {
    return {
      
    }
  },
  created() {
    shiyan().then(res =>{
      console.log(res);
    })
    let data = {name:"111"}
    time(data).then(res =>{
      console.log(res);
    })
    // this.$http.get('http://localhost:3007/home').then(res =>{
    //   console.log(res);
    // })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
