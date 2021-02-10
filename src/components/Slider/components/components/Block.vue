<template>
  <div class="block">
    <div class="block-header">
      <div class="image">
        <slot></slot>
      </div>
      <div class="block-header-text">
        <div class="block-header-link"><a :href="'http://'+headerLink">{{ headerLink }}</a></div>
        <div class="block-header-2">{{ headerText }}</div>
      </div>
    </div>
    <div class="block-header-2 block-adaptiv">{{ headerText }}</div>
    <div class="header">{{ header }}</div>
    <div class="text">{{ text }}</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
@Options({})
export default class Block extends Vue {
  @Prop(String) private readonly headerLink: string | undefined;
  @Prop(String) private readonly headerText: string | undefined;
  @Prop(String) private readonly header: string | undefined;
  @Prop(String) private readonly text: string | undefined;
}
</script>

<style lang="scss" scoped>
.block-adaptiv {
  display: none;
}
.block {
  padding: 50px 60px 50px 60px;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 10px 10px 32px rgba(40, 40, 40, 0.2);
  border-radius: 20px;
  &-header {
    display: flex;
    &-text {
      padding-left: 85px;
      padding-top: 20px;
    }
    &-link {
      font-family: TTFirs-Medium;
      font-size: 14px;
      line-height: 125%;
      text-decoration-line: underline;
      color: #ff6f43;
      padding-bottom: 20px;
      a{
        font-family: TTFirs-Medium;
        font-size: 14px;
        line-height: 125%;
        text-decoration-line: underline;
        color: #ff6f43;
        padding-bottom: 20px;
      }
    }
    &-2 {
      font-family: TTFirs-Medium;
      font-size: 14px;
      line-height: 125%;
      color: #000000;
    }
  }
}
.header {
  font-family: TTFirs-Bold;
  font-size: 36px;
  line-height: 125%;
  letter-spacing: 0.06em;
  color: #19181b;
  padding-top: 30px;
  padding-bottom: 30px;
}
.text {
  font-family: TTFirs-Medium;
  font-size: 20px;
  line-height: 125%;
  color: #19181b;
}
@media (max-width: 640px){
  .block{
    padding: 40px;
  }
  .block-header-text{
    padding-left: 20px;
  }
  .header{
    font-size: 24px;
  }
}
@media (min-width: 320px) and (max-width: 480px) {
  .header{
    font-size: 18px;
  }
  .block-header-2 {
    display: none;
  }
  .block-adaptiv {
    display: block;
    padding-top: 14px;
  }
}
</style>
