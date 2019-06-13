<template>
  <div id="app">
    <div id="nav">
      <router-link to="/share">share</router-link>
      <router-link to="/video">video</router-link>
      <router-link to="/audio">audio</router-link>
      <router-link to="/html">html</router-link>
      <router-link to="/qrcode">二维码</router-link>
      <router-link to="/filters">filters</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
</style>
