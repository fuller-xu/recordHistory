<script>
import { mapState, mapMutations, mapGetters } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(['count']),
    ...mapState('child', ['childName']),
    ...mapGetters(['loginName'])
  },
  mounted() {},
  methods: {
    ...mapMutations(['MUTATION_INCREMENT']),
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
