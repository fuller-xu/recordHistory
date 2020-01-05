<script>
export default {
  methods: {
    goto() {
      this.$router.push({ path: '/vueContent' });
    }
  }
};
</script>
<template>
  <div class="use-css" @click="goto">
    <button>我是组件</button>
    <div class="gift"></div>
  </div>
</template>

<style scoped>
@keyframes gifAni {
  0% {
    background-position-x: 0;
  }

  100% {
    background-position-x: -1400px;
  }
}
.gift {
  width: 140px;
  height: 140px;
  -webkit-font-smoothing: antialiased;
  background-image: url(../assets/images/animation.png);
  background-size: cover;
  background-repeat: no-repeat;
  animation: 0.8s steps(10) infinite gifAni;
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor;
}
</style>
