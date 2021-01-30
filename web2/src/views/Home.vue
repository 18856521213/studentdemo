<template>
  <div class="home">
    <el-container>
      <el-header>
        <Hander />
      </el-header>
      <el-container class="container">
        <el-aside width="200px">
          <Aside />
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Hander from '@/components/header.vue'
import Aside from '@/components/aside.vue'
export default {
  name: 'Home',
  components:{ Hander, Aside }
}
</script>
<style lang="less" scoped>
.el-header{
    padding: 0;
}
.container{
  height: 100%;
  background-color: #324157 !important;
}
// .el-aside {
//   height:100%;
//   display: block;
//   position: relative;
//   background-color: #324157 !important;
// }
</style>
