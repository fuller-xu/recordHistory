<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
import { MUTATION_INCREMENT, MUTATION_CHILD_CHANGE } from '@/store/mutation_types.js';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(['count']),
    ...mapState('child', ['childName']),
    ...mapGetters(['loginName'])
  },
  mounted() {
    console.log(this);
  },
  methods: {
    ...mapMutations({ MUTATION_INCREMENT }),
    ...mapMutations('child', { MUTATION_CHILD_CHANGE }),
    goto() {
      this.$router.push({ path: '/vueMessage' });
    }
  }
};
</script>
<template>
  <div class="use-css">
    <button @click="goto">跳转</button>
    <button @click="MUTATION_INCREMENT">增加</button>
    <div>{{ count }}</div>
    <div>{{ loginName }}</div>
    <button @click="MUTATION_CHILD_CHANGE('准腾')">修改名字</button>
    <div>{{ childName }}</div>
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
