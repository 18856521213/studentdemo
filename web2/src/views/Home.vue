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
        <el-main>
          <pageHeader></pageHeader>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Hander from '@/components/header.vue'
import Aside from '@/components/aside.vue'
import pageHeader from '@/components/common/pageHeader.vue'
export default {
  name: 'Home',
  components:{ Hander, Aside, pageHeader }
}
</script>
<style lang="less" scoped>
.el-header{
    padding: 0;
}
</style>
