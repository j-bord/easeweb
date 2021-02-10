<template>
  <div class="underText">
    <div class="_col-12 _col-md-6">
      <HardButton />
    </div>
    <div class="_col-12 _col-md-6 _row _p-n chip-box">
      <Chip header="(первое)" body="ONLINE доступ к данным 1С" />
      <Chip header="(второе)" body="Бесшовная интеграция" />
      <Chip header="(третье)" body="Высокая скорость работы сайта" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import HardButton from "./components/HardButton/HardButton.vue";
import Chip from "./components/Chip/Chip.vue";
@Options({
  components: {
    HardButton,
    Chip
  }
})
export default class UnderText extends Vue {}
</script>

<style lang="scss" scoped>
.underText {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 40px;
  width: 100%;
}
.chips {
  display: flex;
  justify-content: space-between;
}
@media (max-width: 640px) {
  .underText {
    padding-bottom: 130px;
  }
  .chip-box {
    order: -1;
  }
  .hardButton {
    margin: 0 auto;
  }
}
</style>
