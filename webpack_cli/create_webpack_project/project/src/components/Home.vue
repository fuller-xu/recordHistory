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
console.log(111);
console.log(Object.keys(dataPick(data, jsonClass)));
console.log(getContent('lele'));
export default {
  components: {},
  data() {
    return {
      message: '你好!大...大前端~哈1'
    };
  },
  created() {},
  methods: {}
};
</script>
<template>
  <div>
    <router-view></router-view>
    <div class="red">{{ message }}</div>
    <img src="../assets/images/taotao.jpg" alt="" />
  </div>
</template>

<style scoped></style>
