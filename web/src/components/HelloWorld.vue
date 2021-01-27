<template>
  <div class="hello">
  </div>
</template>

<script>
import { addStudent } from '@/api/index.js'
export default {
  name: 'HelloWorld',
  data() {
    return {
      
    }
  },
  created() {
    addStudent().then(res =>{
      console.log(res);
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
