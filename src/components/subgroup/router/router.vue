<template>
  <!-- 路由 -->
  <div class="router">
      当前路由 {{route}}
      <div @click="doCopy(route)">复制</div>
  </div>
</template>

<script>
export default {
  name: 'router',
  props: {
  },
  data () {
    return {
      route: null
    }
  },
  watch: {
    // 监测路由的变化
    '$route' (to, from) {
      this.route = this.$route.params.id
    }
  },
  mounted () {
    this.route = this.$route.params.id
  },
  methods: {
  }
//   // 导航守卫
//   beforeRouteUpdate (to, from, next) {
//     this.route = to.params.id
//   }
}
</script>

<style scoped>
</style>
