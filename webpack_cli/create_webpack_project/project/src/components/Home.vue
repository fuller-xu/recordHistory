<script>
import { dataPick } from 'data-pick';
import('data-pick').then((res) => {
  console.log(res);
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
});
import('@/utils/content').then((res) => {
  console.log(res);
  let { getContent } = res;
  console.log(getContent('lele'));
});
console.log([1, 2].includes(2));

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
