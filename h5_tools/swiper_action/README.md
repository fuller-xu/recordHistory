# 制作一个移动端左滑的插件

> 本文案例是基于uni-app框架，使用vue template实现的，记录一下实现的方式。

![案例GIF](https://jeno.oss-cn-shanghai.aliyuncs.com/web/h5_tools/swiper_action_gif.gif)

### 封装组件

1. 实现左滑的方式很简单，父元素下，多个子元素采用不换行的方式布局，并且父元素使用超出区域隐藏，将操作区域隐藏于右侧。
2. 通过判断用户的触摸移动事件，去动态修改父元素的left值，如果用户手势是向左滑动，就将父元素向左移动指定距离。
3. 最后根据需求将移动后的元素归位。

```js
<template>
   <view
      class="swiper-action"
      :style="{ left: moveLeftValue, transition: `left ${time}ms` }"
      @touchstart="touchstart($event)"
      @touchmove="touchmove($event)"
   >
      <slot></slot>
   </view>
</template>

<script>
import api from '@/utils/api.js';
import { PX_UNIT } from '@/utils/constant';
import { clearUnit } from '@/utils/format';
export default {
   props: {
      identity: {
         type: Object,
         default: () => ({})
      },
      options: {
         type: Object,
         default: () => ({})
      }
   },
   data() {
      // 默认值
      const defaultValue = {
         moveDistance: 0, // 移动值
         time: 350 // 毫秒
      };
      return {
         startX: 0, // 触摸的点的x轴数值
         screenRate: 1, // 屏幕宽是750的比率,
         moveLeftValue: 0,// 父元素向左移动的距离
         ...defaultValue,// 默认值
         ...this.options
      };
   },
   mounted() {
      // 屏幕宽是750的比率,
      const device = api.getSystemInfoSync();
      this.screenRate = device.screenWidth / 750;
      //   console.log(this.screenRate);
      this.needMoveDistance = -clearUnit(this.moveDistance) * this.screenRate + PX_UNIT;
   },
   methods: {
      touchstart(e) {
         let touch = e.touches[0] || e.changedTouches[0];
         this.startX = touch.pageX;
         this.moveLeftValue || (this.moveLeftValue = 0);
      },
      touchmove(e) {
         let touch = e.touches[0] || e.changedTouches[0];
         // 如果向左滑动，就向左移动,并且左边距（left值）不等于需要移动的距离。
         
         if (touch.pageX - this.startX < 0 && this.moveLeftValue !== this.needMoveDistance) {
            this.moveLeftValue = this.needMoveDistance;
            // 向父组件触发打开事件，方便父组件去关闭其他子组件
            this.$emit('opened', this.identity);
         }
         // 如果向右滑动，就关闭
         else if (touch.pageX - this.startX > 0) {
            this.moveLeftValue = 0;
         }
      },
      // 关闭
      close() {
         this.moveLeftValue = 0;
      }
   }
};
</script>

<style lang="scss" scoped>
.swiper-action {
   position: relative;
   left: 0;
   width: 100%;
   height: 100%;
}
</style>

```

### 组件的使用

```js
<template>
   <view class="page" @click="closeAll">
      <view v-for="item in allData" :key="item.id" class="card item">
         <SwiperAction
            :ref="`${item.id}`"
            :key="`swiper${item.id}`"
            :options="{
               moveDistance: 180
            }"
            :identity="item"
            @opened="opened"
         >
            <view class="content">
               <view class="line">
                  <image class="icon" src="../../static/mine/wenjian.png"></image>
                  <text>XXXX</text>
               </view>
               <view class="line">
                  <image class="icon" src="../../static/mine/shop2x.png"></image>
                  <text>XXXXX</text>
               </view>
               <view class="line">
                  <image class="icon" src="../../static/mine/shijian2x.png"></image>
                  <text>XXXXXX</text>
               </view>
               <view class="status">
                  <image src="../../static/mine/yijieshou.png"></image>
               </view>
            </view>
            <view class="operation">
               <iamge src="../../static/mine/cuo.png"></iamge>
               <view>取消</view>
            </view>
         </SwiperAction>
      </view>
   </view>
</template>

<script>
import SwiperAction from '@/components/common/SwiperAction.vue';
export default {
   components: {
      SwiperAction
   },
   data() {
      return {
         allData: [{ id: 1 }, { id: 2 }]
      };
   },
   mounted() {},
   methods: {
       //关闭其他的组件
      opened({ id } = {}) {
         this.closeAll(id);
      },
      //关闭所有的组件
      closeAll(id) {
         this.allData.forEach(item => {
            // ID为空，或者 不等于id 的
            if (!id || item.id !== id) this.$refs[item.id][0].close();
         });
      }
   }
};
</script>
<style lang="scss" scoped>
$item-width: 694upx;
$font-size-26: 26upx;
.w100-box {
   width: 100%;
   box-sizing: border-box;
}
@mixin flex($justify: center, $direction: row, $wrap: nowrap, $align: center) {
   display: flex;
   flex-direction: $direction;
   flex-wrap: $wrap;
   align-items: $align;
   justify-content: $justify;
}

.page {
   padding: 40upx 0;
   .item {
      position: relative;
      margin-bottom: 40upx;
      padding: 0;
      width: $item-width;
      height: 320upx;
      overflow: hidden;
      .content {
         position: absolute;
         left: 0;
         padding: 50upx 40upx;
         height: 100%;
         @extend .w100-box;
         @include flex(space-between, column, wrap, flex-start);
      }
      .operation {
         position: absolute;
         left: $item-width;
         width: 180upx;
         height: 100%;
         background: #ff8484;
         color: $white;
         font-size: $font-size-26;
         @include flex();
         image {
            width: 92upx;
            height: 92upx;
         }
      }
      .line {
         font-size: $font-size-26;
         color: $666;
         @include flex(flex-start);
         .icon {
            margin-right: 30upx;
            width: 30upx;
            height: 30upx;
         }
      }
      .status {
         position: absolute;
         right: 0;
         top: 0;
         width: 150upx;
         height: 150upx;
         image {
            width: 100%;
            height: 100%;
         }
      }
   }
}
.none {
   text-align: center;
   font-size: $font-size-32;
   color: #929292;
   image {
      margin-top: 256upx;
      width: 702upx;
      height: 331upx;
   }
}
</style>

```