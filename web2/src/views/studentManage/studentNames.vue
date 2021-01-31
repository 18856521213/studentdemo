<template>
    <div class="box">
        <el-form ref="studentForm" inline :model="ruleForm" :rules="rules" label-width="90px">
            <el-form-item label="学生姓名">
                <el-input placeholder="请输入学生姓名"></el-input>
            </el-form-item>
            <el-form-item label="学生学号">
                <el-input placeholder="请输入学生学号"></el-input>
            </el-form-item>
            <el-form-item label="身份证号">
                <el-input placeholder="请输入身份证号"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="el-icon-search">查询</el-button>
                <el-button type="primary" @click="dialogVisible = true">添加学生</el-button>
                <el-button type="warning">重置</el-button>
            </el-form-item>
        </el-form>
        <el-table
        :data="tableData"
        border
        :header-cell-style="{background:'#cadcff',color:'#606266'}"
        style="width: 100%">
            <el-table-column type="index" :index="indexMethod" label="序号" width="60" align="center"></el-table-column>
            <el-table-column prop="date" label="日期" align="center"></el-table-column>
            <el-table-column prop="date" label="日期" align="center"></el-table-column>
            <el-table-column prop="date" label="日期" align="center"></el-table-column>
            <el-table-column prop="date" label="日期" align="center"></el-table-column>
            <el-table-column prop="date" label="日期" align="center"></el-table-column>
        </el-table>

        <el-dialog
            title="添加学生"
            :visible.sync="dialogVisible"
            width="40%"
            :before-close="handleClose">
            <div class="dialog-content">
                <el-form></el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import { addStudent } from "@/api/studentManage/index.js"
export default {
    name:"studentInfo",
    data() {
        return {
            tableData:[],
            page:{},
            ruleForm:{},
            //表单验证规则
            rules:{},
            dialogVisible:false
        }
    },
    methods: {
        indexMethod(){
            return 1
        }
    },
}
</script>
<style lang="less" scoped>
.box{
    padding-top:10px;
}
</style>