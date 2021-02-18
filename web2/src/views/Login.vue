<template>
  <div class="box">
    <div class="content">
      <div class="logo">
        <img src="~@/assets/logo.png" alt="logo">
        学生管理系统
      </div>
      <div class="user">
        <input type="text" class="input">
      </div>
      <div class="password">
        <input type="password" class="input">
      </div>
    </div>
  </div>
</template>
<script>
import { addUser } from "@/api/user/index.js"
export default {
  name:"login",
  data() {
    return {
      addUserform:{
        userName:"",
        password:""
      }
    }
  },
  methods: {
    registered(){
      addUser(this.addUserform).then(res =>{
        console.log(res);
      })
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
      height: 350px;
      background-color: rgba(0, 0, 0, .2);
      z-index: 10;
      padding: 0 10px;
      .logo{
        width: 100%;
        height: 30px;
        color:#fff;
        text-align:center;
        line-height:30px;
        font-size: 16px;
        padding: 15px 0 5px 0;
        img{
          width:30px;
        }
      }
      .input{
        width: 100%;
        height: 30px;
        border: 0;
        outline: none;
        background-color:transparent;
        color:#fff;
      }
      .user{
        border: 1px solid #fff;
        border-radius: 50px;
        padding:15px 0 0 0;
        margin: 10px 0 10px 0;
      }
      .password{
        border: 1px solid #fff;
        border-radius: 50px;
        padding:15px 0 0 0;
        margin: 10px 0 10px 0;
      }
    }
  }
</style>
