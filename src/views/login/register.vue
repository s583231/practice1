<template>
  <div class="login">
    <div class="loginbox">
      <div class="title">注册</div>
      <div><input class="input" type="text" placeholder="请输入账号"></div>
      <div><input class="input" type="password" placeholder="请输入密码"></div>
      <div>
        <div class="left pointer" @click="tologin">登录</div>
        <div class="right pointer" @click="toForgetPassword">忘记密码</div>
      </div>
      <div>
        <button class="btn pointer" @click="register">注册</button>
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
    tologin () {
      this.$router.push({ path: '/login' })
    },
    register () {
      this.$router.push({ path: '/' })
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
  background: url(../../assets/images/bg.jpg) no-repeat fixed;
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
