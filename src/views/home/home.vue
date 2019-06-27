<template>
  <div class="home">
    <div class="left">
      <sidebar></sidebar>
    </div>
    <div class="right">
      <!-- <Header></Header>
      <router-view></router-view>
      <Footer></Footer> -->
    </div>
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
.right{
    border: 1px solid red;
    height: 100px;
    margin-left: 200px;
}
</style>
