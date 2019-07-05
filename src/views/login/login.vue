<template>
  <div class="login">
    <div class="loginbox">
      <div class="title">登录</div>
      <div><input class="input" type="text" placeholder="请输入账号"></div>
      <div><input class="input" type="password" placeholder="请输入密码"></div>
      <div>
        <div class="left pointer" @click="toRegister">注册</div>
        <div class="right pointer" @click="toForgetPassword">忘记密码</div>
      </div>
      <div>
        <button class="btn pointer" @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isinfo: false,
      info: {
        name: '',
        tel: '',
        type: 1
      }
    }
  },
  methods: {
    login () {
      this.$router.push({ path: '/index' })
    },
    toRegister () {
      this.$router.push({ path: '/register' })
    },
    toForgetPassword () {
      this.$router.push({ path: '/forgetPassword' })
    }
  }
}
</script>

<style scoped>
.title{
  text-align: center;
  font-size: 32px;
  margin-bottom: 30px;
}
.login{
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background: url(../../assets/images/bg1.jpg) no-repeat fixed;
  background-size: 100%;
}

.loginbox{
  padding: 50px 100px;
  width: 300px;
  height: 400px;
  background: #fff;
  border-radius: 5px;
  margin: 150px auto 0;
}

</style>
