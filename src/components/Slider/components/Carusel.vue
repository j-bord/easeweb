<template>
  <swiper :slides-per-view="'auto'" :space-between="100" class="swiper-wrapper">
    <swiper-slide class="block">
      <Block
        headerLink="www.gkh-market.ru"
        headerText="ЖКХ-Маркет — поставки товаров для ЖКХ и комплексное снабжение"
        header="Перенос существующего проекта с 1С-Битрикс на EasyOneWeb"
        text="Клиент перенес в яндекс-облако 1С. Получил возможность выводить каждому клиенту его цены с учетом персональных скидок"
      >
        <img src="@/assets/svg/block1-logo.svg" />
      </Block>
    </swiper-slide>
    <swiper-slide class="block">
      <Block
        headerLink="zumba24.ru"
        headerText="Zumba24 — маркетплейс семян для посева огорода"
        header="Реализация маркетплейса с нуля на платформе EasyOneWeb "
        text="Клиент работает на УТ11. Сервер установлен локально в магазине. На сайт выводятся бонусы из 1С. Реализованы торговые предложения средствами платформы. Работает сервис персональных предложений"
      >
        <img src="@/assets/svg/block2-logo.svg" />
      </Block>
    </swiper-slide>
    <swiper-slide class="block">
      <Block
        headerLink="zumba24.ru"
        headerText="Zumba24 — маркетплейс семян для посева огорода"
        header="Реализация маркетплейса с нуля на платформе EasyOneWeb "
        text="Клиент работает на УТ11. Сервер установлен локально в магазине. На сайт выводятся бонусы из 1С. Реализованы торговые предложения средствами платформы. Работает сервис персональных предложений"
      >
        <img src="@/assets/svg/block2-logo.svg" />
      </Block>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
import Block from "./components/Block.vue";

@Options({
  components: {
    Swiper,
    SwiperSlide,
    Block
  }
})
export default class Carusel extends Vue {}
</script>

<style lang="scss" scoped>
.swiper-wrapper {
  width: 100%;
  height: 100%;
  padding: 32px 15px;
  box-sizing: border-box;
}
.swiper-container {

}
.block {
  width: 100%;
  max-width: 660px;
  min-height: 500px;
}
@media (min-width: 1200px) {
  .swiper-wrapper {
    padding: 32px;
  }
}
</style>
