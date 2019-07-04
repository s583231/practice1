<template>
  <div class="home">
    <div class="child-one">
      <sidebar></sidebar>
    </div>
    <div class="child-two">
      <Header></Header>
      <router-view></router-view>
      <Footer></Footer>
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
.home{
  min-width: 1000px;
  height: 100vh;
  display: flex;
}

.child-one{
  width:200px;
  height: 100%;
}
.child-two{
  flex: 1;
}

</style>
