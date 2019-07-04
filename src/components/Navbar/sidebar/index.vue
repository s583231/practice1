<template>
  <!-- 侧边栏 -->
  <div class="sidebar">
    <el-menu
      default-active="defaultActive"
      class="el-menu-vertical-demo"
      background-color='#545c64'
      text-color='#fff'
      active-text-colo='#409EFF'
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      router>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">路由</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="/router/1">路由1</el-menu-item>
          <el-menu-item index="/router/2">路由2</el-menu-item>
          <el-menu-item index="/router/3">路由3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index='2'>
        <template slot="title">
          <i></i>
          <span>音/视频</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/audio">audio</el-menu-item>
          <el-menu-item index="/video">video</el-menu-item>
          <el-menu-item index="/video1">video1</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/share">
        <i class="el-icon-menu"></i>
        <span slot="title">share</span>
      </el-menu-item>
      <el-menu-item index="/video">
        <i class="el-icon-document"></i>
        <span slot="title">video</span>
      </el-menu-item>
      <el-menu-item index="/">
        <i class="el-icon-setting"></i>
        <span slot="title">系统设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
  },
  data () {
    return {
      isCollapse: false,
      defaultActive: null // 当前激活菜单indx
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style>
.sidebar .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

<style scoped>
.sidebar{
  height: 100vh;
  min-width: 200px;
  background: #545c64;
}
</style>
