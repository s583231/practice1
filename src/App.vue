<template>
  <div id="app">
    <div id="nav">
      <router-link to="/share">share</router-link><br>
      <router-link to="/video">video</router-link><br>
      <router-link to="/video1">video</router-link><br>
      <router-link to="/audio">audio</router-link><br>
      <router-link to="/html">html</router-link><br>
      <router-link to="/qrcode">二维码</router-link><br>
      <router-link to="/filters">filters</router-link><br>
      <router-link to="/fileType">识别文件类型</router-link><br>
    </div>
    <router-view/>
  </div>
</template>

<style>
*{
  padding: 0 ;
  margin: 0;
}
</style>
