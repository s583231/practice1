<template>
  <div class="login">
    <div class="loginbox">
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on" label-position="left">
        <div class="title-container">
          <h3 class="title">Login Form</h3>
        </div>
        <el-form-item prop="username">
          <span class="svg-container">
            <svg-icon icon-class="user" />
          </span>
          <el-input
            ref="username"
            v-model="loginForm.username"
            placeholder="Username"
            name="username"
            type="text"
            tabindex="1"
            autocomplete="on"
          />
        </el-form-item>
        <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
          <el-form-item prop="password">
            <span class="svg-container">
              <svg-icon icon-class="password" />
            </span>
            <el-input
              :key="passwordType"
              ref="password"
              v-model="loginForm.password"
              :type="passwordType"
              placeholder="Password"
              name="password"
              tabindex="2"
              autocomplete="on"
              @keyup.native="checkCapslock"
              @blur="capsTooltip = false"
              @keyup.enter.native="handleLogin"
            />
            <span class="show-pwd" @click="showPwd">
              <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
            </span>
          </el-form-item>
        </el-tooltip>
        <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">Login</el-button>
        <div style="position:relative">
          <div class="tips">
            <span>Username : admin</span>
            <span>Password : any</span>
          </div>
          <div class="tips">
            <span style="margin-right:18px;">Username : editor</span>
            <span>Password : any</span>
          </div>
          <el-button class="thirdparty-button" type="primary" @click="showDialog=true">
            Or connect with
          </el-button>
        </div>
      </el-form>
      <!-- <div class="title">登录</div>
      <div><input class="input" type="text" placeholder="请输入账号"></div>
      <div><input class="input" type="password" placeholder="请输入密码"></div>
      <div>
        <div class="left pointer" @click="toRegister">注册</div>
        <div class="right pointer" @click="toForgetPassword">忘记密码</div>
      </div>
      <div>
        <button class="btn pointer" @click="login">登录</button>
      </div> -->
    </div>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'
export default {
  data () {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {}
    }
  },
  methods: {
    showPwd () {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    login () {
      this.$message.error('123456')
      // this.$router.push({ path: '/index' })
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
