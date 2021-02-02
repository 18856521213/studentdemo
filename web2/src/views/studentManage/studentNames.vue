<template>
    <div class="box">
        <el-form ref="studentForm" inline :model="filterForm" :rules="rules" label-width="90px">
            <el-form-item label="学生姓名">
                <el-input size="mini" placeholder="请输入学生姓名" v-model="filterForm.name"></el-input>
            </el-form-item>
            <!-- <el-form-item label="学生学号">
                <el-input placeholder="请输入学生学号"></el-input>
            </el-form-item> -->
            <el-form-item label="身份证号">
                <el-input size="mini" placeholder="请输入身份证号" v-model="filterForm.studyID"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button size="mini" type="primary" icon="el-icon-search" @click="searchHandle">查询</el-button>
                <el-button size="mini" type="primary" @click="dialogVisible = true">添加学生</el-button>
                <el-button size="mini" type="warning">重置</el-button>
                <el-button size="mini" type="primary" @click="uploadExcel">下载模板</el-button>
                <el-button size="mini" type="primary" @click="dialogVisible3 = true">批量添加学生信息</el-button>
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
                <el-table-column label="操作" align="center" width="220">
                 <template slot-scope="scope">
                    <el-button size="mini" @click="changeStudent(scope.row)" type="primary">修改</el-button>
                    <el-button size="mini" @click="deleteStudent(scope.row)" type="danger">删除</el-button>
                </template>
                </el-table-column>
            </el-table>
        </div>
        <div style="text-align: right; margin-top: 12px;">
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
            @close="resetAddForm"
            :show-close="false"
            width="500px">
            <div class="dialog-content">
                <el-form ref="studentForm" :rules="rules" :model="addStudentForm" label-width="90px">
                    <el-form-item label="学生姓名" prop="name">
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

        <el-dialog
            title="修改资料"
            :visible.sync="dialogVisible2"
            @close="resetStudentInfo"
            :show-close="false"
            width="500px">
            <div class="dialog-content">
                <el-form ref="studentForm" :model="changeStudentInfo" label-width="100px">
                    <el-form-item label="学生姓名">
                        <el-input placeholder="请输入学生姓名" v-model="changeStudentInfo.name"></el-input>
                    </el-form-item>
                    <el-form-item label="学生年龄">
                        <el-input placeholder="请输入学生年龄" v-model="changeStudentInfo.age"></el-input>
                    </el-form-item>
                    <el-form-item label="学生父亲姓名">
                        <el-input placeholder="请输入学生父亲姓名" v-model="changeStudentInfo.fatherName"></el-input>
                    </el-form-item>
                    <el-form-item label="学生母亲姓名">
                        <el-input placeholder="请输入学生母亲姓名" v-model="changeStudentInfo.matherName"></el-input>
                    </el-form-item>
                    <el-form-item label="学生家庭住址">
                        <el-input placeholder="请输入学生家庭住址" v-model="changeStudentInfo.address"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible2 = false">取 消</el-button>
                <el-button type="primary" @click="changeSrudentInfo">确 定</el-button>
            </span>
        </el-dialog>


        <el-dialog
            title="批量添加学生资料"
            :visible.sync="dialogVisible3"
            :show-close="false"
            width="500px">
            <div class="dialog-content">
                <el-upload
                    class="upload-demo"
                    ref="upload"
                    action="#"
                    :multiple="false"
                    :limit="1"
                    accept=".xlsx,.xls"
                    :auto-upload="false"
                    :http-request="uploadFile"
                    :on-change="changeFile"
                    :file-list="fileList">
                    <el-button size="small" type="primary">点击上传学生信息文档</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传固定模板，且上传一个文件</div>
                </el-upload>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible3 = false">取 消</el-button>
                <el-button type="primary" @click="batchAddStudentInfo">确 定</el-button>
            </span>
        </el-dialog>


    </div>
</template>
<script>
import { addStudent, getStudentList,deleteStudent,updateStudent,uploadExcel,batchAddStudentInfo } from "@/api/studentManage/index.js"
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
            filterForm:{
                name:"",
                studyID:"",
            },
            dialogVisible:false,
            dialogVisible2:false,
            dialogVisible3:false,
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
            ],
            changeStudentInfo:{
                studyID:"",
                name:"",
                age:"",
                fatherName:"",
                matherName:'',
                address:'',
            },
            //上传的文件
            fileList:[],
            //表单验证规则
            rules:{
                name:[
                    {required: true, message: '请输入学生姓名', trigger: 'blur'}
                ]
            },

        }
    },
    watch:{
        tableData(newVal){
            if(newVal.length == 0){
                this.page.current = this.page.current - 1;
                this.getStudentList()
            }
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
                express:this.filterForm
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
        //搜索
        searchHandle(){
            this.page.current = 1;
            this.getStudentList();
        },
        //改变列表尺寸
        handleSizeChange(size){
            this.page.size = size;
            this.page.current = 1;
            this.getStudentList();
        },
        //跳转页数
        handleCurrentChange(current){
            this.page.current = current;
            this.getStudentList();
        },
        //修改学生信息
        changeStudent(row){
            Object.assign(this.changeStudentInfo,row)
            // this.changeStudentInfo.studyID = row.studyID;
            this.dialogVisible2 = true
            console.log(this.changeStudentInfo);
        },
        //提交学生修改信息
        changeSrudentInfo(){
            updateStudent(this.changeStudentInfo).then(res =>{
                if(res.success){
                    this.$message.success("修改成功");
                    this.dialogVisible2 = false;
                    this.getStudentList();                }
            })
        },
        resetStudentInfo(){},
        //删除学生
        deleteStudent(row){
            this.$confirm('此操作将永久删除该学生, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    let data = {studyID:row.studyID};
                    deleteStudent(data).then(res=>{
                        if(res.success){
                            this.$message.success('删除成功')
                            this.getStudentList()
                        }
                    })
                }).catch(() => {
                    this.$message.warning('已取消删除');
            });
        },
        //重置添加学生表单信息
        resetAddForm(){
            for(let i in this.addStudentForm){
                this.addStudentForm[i] = ""
            }
            // this.refs['studentForm'].resetFields();
        },
        //下载模板
        uploadExcel(){
            uploadExcel().then(res=>{
                let data = res;
                // console.log(data)
                let blob = new Blob([data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'} );
                let fileName = "模板.xlsx";// fileName下载时文件名
                if (typeof window.navigator.msSaveBlob !== 'undefined') {
                /** For IE* >=IE10*/
                window.navigator.msSaveBlob(blob, fileName);
                } else {
                /** For Non-IE (chrome, firefox)*/
                var URL = window.URL || window.webkitURL;
                var objectUrl = URL.createObjectURL(blob);
                if (fileName) {
                    var a = document.createElement('a');
                    if (typeof a.download === 'undefined') {
                    window.location = objectUrl;
                } else {
                    a.href = objectUrl;
                    a.download = fileName;
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                    }
                }
                }

            })
        },
        //批量添加学生
        //自定义的添加学生信息
        uploadFile(file){
            let data = new FormData();
            data.append("file",file)
            batchAddStudentInfo(data).then(res=>{
            })
        },
        //文件改变的回调函数
        changeFile(file,fileList){
            this.uploadFile(file)
            console.log(file,fileList)
        },
        //批量添加学生按钮
        batchAddStudentInfo(){
            this.$refs.upload.submit();
        }
    },
}
</script>
<style lang="less" scoped>
.box{
    padding-top:10px;
    // /deep/ .upload-demo{
    //     width: 90px !important;
    // }
}
</style>