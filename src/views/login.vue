<template>
  <div class="login">
    <button @click="login">login</button>
    <div v-if="isinfo">{{info}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isinfo: false,
      info: {
        name: 'haha',
        tel: 18811111111,
        type: 1
      }
    }
  },
  methods: {
    login () {
      this.isinfo = !this.isinfo
      console.log(this.info)
    }
  }
}
</script>

<style>

</style>
