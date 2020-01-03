<script>
export default {
  created() {},
  methods: {}
};
</script>
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
@font-face {
  font-family: MuYaoFont;
  src: url(./assets/fonts/MuYaoFont.ttf) format('truetype'); /* Safari, Android, iOS */
}
* {
  margin: 0;
  padding: 0;
}
.red {
  font-family: MuYaoFont;
  color: #f00;
  font-size: 50px;
  background: #eee;
  display: flex;
}
</style>
