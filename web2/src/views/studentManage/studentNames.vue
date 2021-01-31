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
        <div>
            <el-table
            :data="tableData"
            border
            :header-cell-style="{background:'#cadcff',color:'#606266'}"
            style="width: 100%">
                <el-table-column type="index" :index="indexMethod" label="序号" width="60" align="center"></el-table-column>
                <el-table-column prop="name" label="姓名" align="center"></el-table-column>
                <el-table-column prop="age" label="年龄" align="center"></el-table-column>
                <el-table-column prop="studyID" label="身份证号" align="center"></el-table-column>
                <el-table-column prop="born" label="出生年月日" align="center"></el-table-column>
                <el-table-column prop="sex" label="学生性别" align="center"></el-table-column>
                <el-table-column prop="studentClass" label="所在班级" align="center"></el-table-column>
                <el-table-column prop="fatherName" label="父亲姓名" align="center"></el-table-column>
                <el-table-column prop="matherName" label="母亲姓名" align="center"></el-table-column>
                <el-table-column prop="address" label="家庭住址" align="center"></el-table-column>
            </el-table>
        </div>
        <div>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="page.current"
                :page-sizes="page.sizes"
                :page-size="page.size"
                layout="total, sizes, prev, pager, next, jumper"
                :total="page.total">
            </el-pagination>
        </div>
        <el-dialog
            title="添加学生"
            :visible.sync="dialogVisible"
            width="500px">
            <div class="dialog-content">
                <el-form ref="studentForm" :model="addStudentForm" label-width="90px">
                    <el-form-item label="学生姓名">
                        <el-input placeholder="请输入学生姓名" v-model="addStudentForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="身份证号码">
                        <el-input placeholder="请输入身份证号码" v-model="addStudentForm.studyID"></el-input>
                    </el-form-item>
                    <el-form-item label="学生年龄">
                        <el-input placeholder="请输入学生年龄" v-model="addStudentForm.age"></el-input>
                    </el-form-item>
                    <el-form-item label="出生年月日">
                        <el-input placeholder="请输入学生年龄" v-model="addStudentForm.born"></el-input>
                    </el-form-item>
                    <el-form-item label="学生班级">
                        <el-input placeholder="请输入学生年龄" v-model="addStudentForm.studentClass"></el-input>
                    </el-form-item>
                    <el-form-item label="学生性别">
                       <el-select placeholder="请选择" v-model="addStudentForm.sex">
                            <el-option
                            v-for="item in studentSex"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="父亲姓名">
                        <el-input placeholder="请输入父亲姓名" v-model="addStudentForm.fatherName"></el-input>
                    </el-form-item>
                    <el-form-item label="母亲姓名">
                        <el-input placeholder="请输入母亲姓名" v-model="addStudentForm.matherName"></el-input>
                    </el-form-item>
                    <el-form-item label="家庭住址">
                        <el-input type="textarea" placeholder="请输入家庭住址" v-model="addStudentForm.address"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addStudent">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import { addStudent, getStudentList } from "@/api/studentManage/index.js"
export default {
    name:"studentInfo",
    data() {
        return {
            tableData:[],
            page:{
                current: 1,
                size: 10,
                total: 0,
                sizes: [10, 20, 50, 100]
            },
            ruleForm:{},
            //表单验证规则
            rules:{},
            dialogVisible:false,
            addStudentForm:{
                name: '',
                studyID:'',
                age:'',
                born:'',
                studentClass:'',
                sex:'',
                fatherName:'',
                matherName:'',
                address:'',
            },
            studentSex:[
                {label:"男",value:'1'},
                {label:"女",value:"0"}
            ]
        }
    },
    created() {
        this.getStudentList()
    },
    methods: {
        //修改表格序号
        indexMethod(index) {
            return (this.page.current - 1) * this.page.size + (index + 1)
        },
        //获取学生列表
        getStudentList(){
            let data = {
                page:{
                    size:this.page.size,
                    current:this.page.current
                },
                express:{}
            };
            getStudentList(data).then(res =>{
                console.log(res);
                if(res.success){
                    this.tableData = res.data;
                    this.page.total = res.total
                }
            })
        },
        //添加学生
        addStudent(){
            addStudent(this.addStudentForm).then(res =>{
               if(res.success){
                   this.$message.success("添加成功");
                   this.dialogVisible = false;
                   this.getStudentList()
               }
            })
        },
        handleSizeChange(size){
            this.page.size = size;
            this.page.current = 1;
            this.getStudentList();
        },
        handleCurrentChange(current){
            this.page.current = current;
            this.getStudentList();
        }


    },
}
</script>
<style lang="less" scoped>
.box{
    padding-top:10px;
}
</style>