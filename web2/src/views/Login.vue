<template>
  <div class="box">
      <div class="content">
          <div class="title">
              <h4>用户登录</h4>
          </div>
          <div class="input">
            <el-form label-width="60px" :model="addUserform">
              <el-form-item label="用户名">
                <el-input v-model="addUserform.userName"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input type="password" v-model="addUserform.password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button>登录</el-button>
                <el-button @click="registered">注册</el-button>
              </el-form-item>
            </el-form>
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
      background-color: rgba(0, 0, 0, .5);
      z-index: 2;
    }
    .content{
      width: 25%;
      height: 45%;
      border-radius: 2%;
      background:#fff;
      z-index: 5;
      overflow: hidden;
      .title{
        background:cornflowerblue;
        width: 100%;
        height: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        h4{
          padding: 0;
          margin: 0;
        }
      }
      .input{
        padding: 30px 25px 10px 10px;
      }
    }
  }
</style>
