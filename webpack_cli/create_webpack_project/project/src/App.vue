<template>
  <div id="app">
    <div class="red">{{ message }}</div>
    <img src="./assets/images/taotao.jpg" alt="" />
    <vue-message></vue-message>
  </div>
</template>

<script>
import VueMessage from '@/components/VueMessage.vue';
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
console.log(111);
console.log(Object.keys(dataPick(data, jsonClass)));
console.log(getContent('lele'));
export default {
  components: {
    VueMessage
  },
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

<style scoped>
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
.unuse-css {
  background: blue;
}
</style>
