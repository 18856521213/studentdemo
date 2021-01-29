<template>
  <div class="home">
    <el-container>
      <el-header>
        <Hander />
      </el-header>
      <el-container>
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
</style>
