<template>
  <div id="app">
    <div class="red">{{ message }}</div>
    <img src="./assets/images/taotao.jpg" alt="" />
  </div>
</template>

<script>
import { dataPick } from 'data-pick';
import { getContent } from '@/utils/content';
console.log([1, 2].includes(2));
console.log(dataPick);
const jsonClass = {
  id: null,
  age: null
};
const data = {
  id: 1,
  age: 2,
  hight: 3,
  abc: 4
};

console.log(Object.keys(dataPick(data, jsonClass)));
export default {
  data() {
    return {
      message: '你好!大...大前端~哈1'
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
@font-face {
  font-family: MuYaoFont;
  src: url(./assets/fonts/MuYaoFont.ttf) format('truetype'); /* Safari, Android, iOS */
}
.red {
  font-family: MuYaoFont;
  color: #f00;
  font-size: 50px;
  background: #eee;
  display: flex;
}
</style>
