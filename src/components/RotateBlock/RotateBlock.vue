<template>
  <!-- <div class="rotateBlock">
    Мгновенная & безшовная синхронизация Мгновенная &
  </div> -->

  <div class="marquee">
    <div>
      <span>Мгновенная & безшовная синхронизация Мгновенная & безшовная синхронизация Мгновенная & безшовная синхронизация Мгновенная & безшовная синхронизация Мгновенная & безшовная синхронизация Мгновенная & безшовная синхронизация</span>      
      <!-- Мгновенная & безшовная синхронизация -->
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({})
export default class Description extends Vue {}
</script>

<style lang="scss" scoped>
.rotateBlock {
  text-align: center;
  overflow: hidden;
  display: flex;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: TTFirs-Bold;
  font-size: 34px;
  line-height: 125%;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #2d2c31;
  background: #19181b;
  // transform: translateY(77px) skewY(2deg);
}

.marquee {
  display: flex;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 100%;
  font-family: TTFirs-Bold;
  font-size: 34px;
  line-height: 125%;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #2d2c31;
  background: #19181b;
  overflow: hidden;
  position: relative;
}

.marquee div {
  display: block;
  width: 200%;
  // height: 30px;

  position: absolute;
  overflow: hidden;

  animation: marquee 25s linear infinite;
}

.marquee span {
  float: left;
  width: 50%;
}

@keyframes marquee {
  0% {
    left: 0;
  }
  100% {
    left: -100%;
  }
}
</style>
