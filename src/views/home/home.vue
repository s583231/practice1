<template>
  <div class="home">
    <div class="left">left</div>
    <div class="right">right</div>
    <!-- <div class="left">
      <sidebar></sidebar>
    </div>
    <div class="left content">
      <Header></Header>
      <router-view></router-view>
      <Footer></Footer>
    </div> -->
  </div>
</template>

<script>
import Header from '../../components/Navbar/header'
import Footer from '../../components/Navbar/footer'
import sidebar from '../../components/Navbar/sidebar'
export default {
  name: '',
  components: {
    Header,
    Footer,
    sidebar
  },
  props: {
  }
}
</script>

<style scoped>
.home{
  min-width: 1000px;
  height: 100vh;
  background: gray
}
.left{
  width:12%;
  height: 100%;
  min-width: 200px;;
  background: gold
}
.right{
  width: 88%;
  height: 100%;
  min-width: 700px;
  background: red;
}
</style>
