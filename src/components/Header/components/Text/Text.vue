<template>
  <h1 class="text">
    <span class="text-line_1"><span class="redText">WEB-приложение</span></span>
    <span class="text-line_2"><span>с прямым </span> <span> доступом</span></span>
    <span class="text-line_3">к &nbsp;<span class="redText">1С</span></span>
  </h1>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Text extends Vue {}
</script>

<style lang="scss" scoped>
.text {
  padding: 50px 15px 0;
  line-height: 125%;
  letter-spacing: 0.06em;
  color: #ffffff;
  &-line_1 {
    display: flex;
  }
  &-line_2 {
    display: flex;
    justify-content: flex-end;
    span:last-child{
      margin-left: 25px;
    }
  }
  &-line_3 {
    display: flex;
    justify-content: center;
  }
}
.redText {
  color: #ff6f43;
}
@media (max-width: 440px){
  .text{
    &-line_2{
      flex-direction: column;
      span:first-child{
        margin-left: 40px;
      }
      span:last-child{
        align-self: flex-end;
      }
    }
    &-line_3{
      margin-left: 85px;
    }
  }
  
}


</style>
