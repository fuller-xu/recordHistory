<template>
  <div id="app">
    <div class="red">
      <span>{{ message }}</span>
      <span>{{ message }}</span>
    </div>
  </div>
</template>

<script>
import { dataPick } from "data-pick";
import { getContent } from "@/utils/content";
console.log([1, 2].includes(2));
console.log([1, 2].includes(2));
export default {
  data() {
    return {
      message: "首页"
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

<style lang="less" scoped>
.red {
  color: #f00;
  font-size: 50px;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
