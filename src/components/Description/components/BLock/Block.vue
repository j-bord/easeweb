<template>
  <div class="block">
    <div class="image">
      <slot></slot>
    </div>
    <div class="header">{{ header }}</div>
    <div class="text">{{ text }}</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Options({})
export default class Block extends Vue {
  @Prop(String) private readonly header: string | undefined;
  @Prop(String) private readonly text: string | undefined;
}
</script>

<style lang="scss" scoped>
.block {
  height: 100%;
  background-color: #2d2c31;
}
.image {
  padding: 30px;
}
.header {
  font-size: 24px;
  padding: 20px 30px;
}
.text {
  font-size: 16px;
  padding: 0 30px 40px;
}
@media (min-width: 960px) and (max-width: 1200px) {
  .header {
    font-size: 20px;
  }
  .text {
    font-size: 16px;
  }
}
@media (min-width: 640px) and (max-width: 960px) {
  .header {
    font-size: 16px;
  }
  .text {
    font-size: 14px;
  }
}
@media (max-width: 640px) {
  .block {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
}
// @media (min-width: 320px) and (max-width: 480px) {
//   .block {
//     width: 100%;
//     max-width: 100%;
//     margin: 0;
//   }
// }
</style>
