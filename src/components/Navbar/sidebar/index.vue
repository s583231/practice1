<template>
  <!-- 侧边栏 -->
  <div class="sidebar">
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      background-color='#545c64'
      text-color='#fff'
      active-text-colo='#ffd04b'
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
      :collapse="isCollapse"
      router>
       <el-menu-item index="/index">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="subgroup">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">组件</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="/subgroup/router/1">路由1</el-menu-item>
          <el-menu-item index="/subgroup/audio">audio</el-menu-item>
          <el-menu-item index="/subgroup/video">video</el-menu-item>
          <el-menu-item index="/subgroup/video1">video1</el-menu-item>
          <el-menu-item index="/subgroup/share">share</el-menu-item>
          <el-menu-item index="/subgroup/upload">头像上传</el-menu-item>
          <el-menu-item index="/subgroup/backTop">返回顶部</el-menu-item>
          <el-menu-item index="/subgroup/dialog">弹框</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="chart">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">图表</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/chart/line">折线图</el-menu-item>
          <el-menu-item index="/chart/column">柱形图</el-menu-item>
          <el-menu-item index="/chart/blend">混合图表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
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
  mounted () {
    this.defaultActive = this.$route.path
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    // selec菜单激活回调
    handleSelect (key, keyPath) {
      console.log('handleSelect', key, keyPath)
      this.defaultActive = key
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
