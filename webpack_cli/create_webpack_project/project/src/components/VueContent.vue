<script>
export default {
  methods: {
    goto() {
      this.$router.push({ path: '/vueMessage' });
    }
  }
};
</script>
<template>
  <div class="use-css" @click="goto">
    <button>我是内容</button>
  </div>
</template>

<style scoped>
.use-css {
  font-size: 20px;
}
.un-use-css {
  font-size: 12px;
}
</style>
