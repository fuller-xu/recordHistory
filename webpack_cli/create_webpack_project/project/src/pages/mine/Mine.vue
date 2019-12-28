<template>
    <div id="app">
        <div class="red">{{ message }}</div>
    </div>
</template>

<script>
import { dataPick } from 'data-pick';
import { getContent } from '@/utils/content';
console.log([1, 2].includes(2));
console.log(dataPick({}, {}));
export default {
    data() {
        return {
            message: '我的'
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
}
</style>
