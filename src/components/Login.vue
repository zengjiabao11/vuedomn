<template>
  <div class="login">
    <div class="login_content">
      <div class="login-img">
        <img src="../assets/logo.png" alt />
      </div>
      <el-form :model="fromlogin"  :rules="loginrules" ref="loginref" label-width="0px" class="a">
        <el-form-item prop="username">
          <el-input v-model="fromlogin.username" prefix-icon=" iconfont icon-ico_username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            
            v-model="fromlogin.password"
            prefix-icon=" iconfont icon-mima1"
          ></el-input>
        </el-form-item>
        <el-button type="primary" @click="login">登陆</el-button>
        <el-button type="warning" @click="submmit">重置</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fromlogin: {
        username: "admin",
        password: "123456"
      },
      loginrules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 5, max: 10, message: "长度在 5 到 10 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 12, message: "长度在 6 到 12 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods:{
    submmit(){
       this.$refs.loginref.resetFields();
    },
    login(){
      this.$refs.loginref.validate(async valid=>{
        if(!valid)return ;
        const {data:res}= await this.$http.post("login",this.fromlogin)
        if(res.meta.status !==200){
           return this.$message.error('登录失败')
        }
          this.$message.success('登录成功')
        window.sessionStorage.getItem('token',res.data.token)
        this.$router.push("/home")
      })
    }
  }
};
</script>
<style  scoped>
.login {
  background: #2b4b6b;
  height: 100%;
}
.login_content {
  background: #fff;
  height: 300px;
  width: 450px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.login-img {
  height: 130px;
  width: 130px;
  position: absolute;
  left: 50%;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  transform: translate(-50%, -50%);
  background: #fff;
  box-shadow: 0 0 10px #eee;
}
.login-img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #eee;
}
.a {
  position: absolute;
  bottom: 10%;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  text-align: center;
}
</style>