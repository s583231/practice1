<template>
  <div class="header">
    <crumbs></crumbs>
    <div class="right">
      <div class="right-menu">
        <el-dropdown class="avatar-container" trigger="click">
          <div class="avatar-wrapper">
            <img :src="`https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80`" class="user-avatar">
            <i class="el-icon-caret-bottom" />
          </div>
          <el-dropdown-menu slot="dropdown" class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item>
                首页
              </el-dropdown-item>
            </router-link>
            <el-dropdown-item divided>
              <span style="display:block;" @click="logout">退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import crumbs from '../crumbs/index'
export default {
  name: '',
  props: {
  },
  components: {
    crumbs
  },
  methods: {
    logout () {
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style scoped>
.header{
  width: 100%;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid rgb(238,241,246)
}
.right{
  margin-right: 20px;
}
.user-avatar {
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  margin-top: 10px;
}
</style>
