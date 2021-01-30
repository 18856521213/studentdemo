<template>
    <div>
        <el-menu
            class="el-menu-vertical-demo"
            background-color="#162237"
            text-color="#ffffff"
            active-text-color="#558dfd">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>导航一</span>
                    </template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                </el-submenu>   
               <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            </el-menu>
        </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    
</style>