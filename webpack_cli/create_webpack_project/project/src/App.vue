<template>
  <div id="app">
    <div class="red">{{ message }}</div>
    <img src="./assets/images/taotao.jpg" alt="" />
  </div>
</template>

<script>
import { getContent } from "@/utils/content";
export default {
  data() {
    return {
      message: "你好!大...大前端~哈"
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      //   this.message = getContent("l");
    }
  }
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: MuYaoFont;
  src: url(./assets/fonts/MuYaoFont.ttf) format("truetype"); /* Safari, Android, iOS */
}
.red {
  font-family: MuYaoFont;
  color: #f00;
  font-size: 40px;
  background: #eee;
}
</style>
