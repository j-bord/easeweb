<template>
  <div class="slider">
    <div class="_container _row">
      <h2 class="slider-header _col-12">Реализованные <span>проекты</span></h2>
      <h2 class="slider-header2 _col-12">проекты</h2>
    </div>
    <div class="slider-container">
      <Carusel />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Carusel from "./components/Carusel.vue";
@Options({
  components: { Carusel }
})
export default class Slider extends Vue {}
</script>

<style lang="scss" scoped>
.slider-header2 {
  display: none;
}
.slider {
  padding-bottom: 115px;
  background-image: url("~@/assets/svg/block3BG.svg");
  background-repeat: repeat-y;
  background-position: top center;
  background-size: 1130px auto;
  &-container {
    // max-width: 1170px + 32;
    margin: 0 auto;
  }
  &-header {
    padding-top: 127px;
    color: #ff6f43;
    & span {
      color: #19181b;
    }
  }
}
@media (min-width: 320px) and (max-width: 640px) {
  .header{
    font-size: 18px;
  }
  .slider-header {
    display: flex;
    & span {
      display: none;
    }
    padding-bottom: 0;
  }
  .slider-header2 {
    display: block;
    color: #19181b;
    display: flex;
    justify-content: flex-end;
    padding-top: 0;
    padding-bottom: 0;
  }
}
</style>
