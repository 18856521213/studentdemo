<template>
  <div class="box">
    <div class="content" v-if="flag">
      <div class="logo">
        <img src="~@/assets/logo.png" alt="logo">
        学生管理系统
      </div>
      <div class="user">
        <i class="el-icon-user-solid icon"></i>
        <input type="text" v-model="loginUserForm.userName" placeholder="输入用户名" class="input">
      </div>
      <div class="password">
        <i class="el-icon-warning icon"></i>
        <input type="password" v-model="loginUserForm.password" placeholder="输入密码" class="input">
      </div>
      <div class="btn">
        <button class="loginBtn" @click="loginUser">登录</button>
      </div>
      <div class="registered" @click="registeredClick">
        <p>还没有账号？立马注册？</p>
      </div>
    </div>
    <div class="content" v-else>
      <div class="logo">
        用户注册
      </div>
      <div class="user">
        <i class="el-icon-user-solid icon"></i>
        <input type="text" v-model="addUserform.userName" placeholder="输入用户名" class="input">
      </div>
      <div class="password">
        <i class="el-icon-warning icon"></i>
        <input type="password" v-model="addUserform.password" placeholder="输入密码" class="input">
      </div>
      <div class="password">
        <i class="el-icon-warning-outline icon"></i>
        <input type="password" v-model="addUserform.rePassword" placeholder="确认密码" class="input">
      </div>
      <div class="btn">
        <button class="immediatelyRegistered" @click="registered">立刻注册</button>
        <button class="cancelRegistered" @click="cancelRegistered">取消注册</button>
      </div>
    </div>
  </div>
</template>
<script>
import { addUser,loginUser } from "@/api/user/index.js"
export default {
  name:"login",
  data() {
    return {
      loginUserForm:{
        userName:"",
        password:"",
      },
      addUserform:{
        userName:"",
        password:"",
        rePassword:""
      },
      flag:true,
    }
  },
  watch:{
    "addUserform.rePassword":{
      deep:true,
      handler(newValue){
        //需要做一次节流
        if(this.addUserform.password != newValue){
          this.$message.error("两次密码不统一")
        } 
      }
    }
  },
  methods: {
    //注册用户
    registered(){
      addUser(this.addUserform).then(res =>{
        console.log(res);
       if(res.success){
         this.flag = true;
         this.$message.success(res.seccessMessage)
       }else{
         this.$message({
           type:"error",
           message:res.errMessage
         })
       }
      })
    },
    //用户登录
    loginUser(){
      if(this.loginUserForm.userName!="" && this.loginUserForm.password!=""){
        let data = {
          userName:this.loginUserForm.userName,
          password:this.loginUserForm.password,
        }
        loginUser(data).then(res =>{
          console.log(res);
          if(res.success){
            this.$router.push("/home/student")
          }else{
            this.$message.error(res.errMessage)
          }
        })

      }else{
        this.$message.info("请填写完整信息")
      }
    },
    //点击用户注册
    registeredClick(){
      this.flag = !this.flag;
    },
    //取消注册
    cancelRegistered(){
      this.flag = !this.flag;
    }
  },
}
</script>
<style lang="less" scoped>
  .box{
    width: 100%;
    height: 100%;
    background-image: url('~@/assets/img/bg.jpg');
    background-size:cover;
    display:flex;
    justify-content: center;
    align-items: center;
    &::before{
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background-color: rgba(0, 0, 0, .6);
      z-index: 2;
    }
    .content{
      width: 280px;
      height: 400px;
      background-color: rgba(0, 0, 0, .2);
      z-index: 10;
      padding: 0 30px;
      .logo{
        width: 100%;
        height: 50px;
        color:#fff;
        text-align:center;
        line-height:30px;
        font-size: 20px;
        padding: 15px 0 5px 0;
        img{
          width:35px;
        }
      }
      .input{
        width: 70%;
        height: 40px;
        border: 0;
        outline: none;
        background-color:transparent;
        color:#fff;
        font-size: 20px;
      }
      .icon{
        color:#fff;
        font-size: 30px;
        margin-left:20px;
      }
      .user{
        border: 1px solid #fff;
        border-radius: 50px;
        margin: 10px 0 10px 0;
        padding:5px 0;
        display:flex;
        align-items: center;
      }
      .password{
        border: 1px solid #fff;
        border-radius: 50px;
        margin: 30px 0 10px 0;
        padding:5px 0;
        display:flex;
        align-items: center;
      }
      .btn{
        padding-top:20px;
        display: flex;
        justify-content: space-between;
        .loginBtn{
          width: 100%;
          height: 50px;
          background-color: brown;
          border:0;
          color: #fff;
          font-size: 20px;
          outline: none;
          &:hover{
            background-color: rgb(153, 45, 45);
          }
        }
        .immediatelyRegistered{
          width: 48%;
          height: 50px;
          background-color: brown;
          border:0;
          color: #fff;
          font-size: 20px;
          outline: none;
          &:hover{
            background-color: rgb(153, 45, 45);
          }
        }
        button:nth-child(2){
          width: 48%;
          height: 50px;
          background-color: #fff;
          border:0;
          color: brown;
          font-size: 20px;
          outline: none;
          &:hover{
            background-color: rgb(226, 226, 226);
          }
        }
      }
      .registered{
        color: #fff;
        font-size: 14px;
        text-align: center;
        margin-top:20px;
        p{
          text-decoration:underline;
          &:hover{
            color:burlywood;
            cursor:pointer;
          }
        }
      }
    }
  }
</style>
