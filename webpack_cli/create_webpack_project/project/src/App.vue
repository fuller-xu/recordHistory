<template>
  <div id="app">
    <div class="red">{{ message }}</div>
  </div>
</template>

<script>
import { getContent } from "@/content";
export default {
  data() {
    return {
      message: "Hello Vue!"
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.message = getContent("l");
    }
  }
};
</script>

<style lang="less" scoped>
.red {
  color: #ff0;
}
</style>
