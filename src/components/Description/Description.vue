<template>
  <div class="description">
    <div class="_container">
      <div class="blocks">
        <div class="_col-12 _col-md-4">
          <Block
            header="Для интернет-магазинов"
            text="Расчитывайте заказ клиента по скидкам 1С. Выводите на сайт актуальные остатки, цены, бонусы. Откройте личные кабинеты для поставщиков ваших товаров. Почувствуйте себя маркетплейсом"
          >
            <img class="blockImage" src="@/assets/svg/block1.svg" alt="" />
          </Block>
        </div>
        <div class="_col-12 _col-md-4">
          <Block
            header="Для крупных предприятий"
            text="Откройте личные кабинеты вашим дилерам и дистрибьютерам. Выводите вашим клиентам подробную информацию о состоянии выполнения заказа"
          >
            <img class="blockImage" src="@/assets/svg/block2.svg" alt="" />
          </Block>
        </div>
        <div class="_col-12 _col-md-4">
          <Block
            header="Для 1С спецаилистов"
            text="Прочувствуйте новые возможности автоматизации бизнеса. Выводите любую информацию в личный кабинет и на сайта клиента"
          >
            <img class="blockImage" src="@/assets/svg/block3.svg" alt="" />
          </Block>
        </div>
      </div>
      <h2 class="text">Магия платформы</h2>
      <div class="image-wrapper">
        <div class="textUnderImage _row">
          <div class="_col-12 _col-md-8 _col-lg-2 _p-n _row UnderImage-item">
            <div class="_col-6 _col-lg-12 UnderImage-box">
              <img src="@/assets/svg/block3-1.svg" alt="" class="UnderImage" />
            </div>
            <div class="_col-6 _col-lg-12">
              Вносите изменения в программе 1С
            </div>
          </div>
          <div class="_col-12 _col-md-8 _col-lg-2 _p-n _row UnderImage-item">
            <div class="_col-6 _col-lg-12 UnderImage-box">
              <img src="@/assets/svg/block3-2.svg" alt="" class="UnderImage" />
            </div>
            <div class="_col-6 _col-lg-12">
              Номенклатура: изменение остатков, цен, реквизитов
            </div>
          </div>
          <div class="_col-12 _col-md-8 _col-lg-2 _p-n _row UnderImage-item">
            <div class="_col-6 _col-lg-12 UnderImage-box">
              <img src="@/assets/svg/block3-3.svg" alt="" class="UnderImage" />
            </div>
            <div class="_col-6 _col-lg-12">
              Контрагенты: изменение данных клиента, изменения заказов,
              документы
            </div>
          </div>
          <div class="_col-12 _col-md-8 _col-lg-2 _p-n _row UnderImage-item">
            <div class="_col-6 _col-lg-12 UnderImage-box">
              <img src="@/assets/svg/block3-4.svg" alt="" class="UnderImage" />
            </div>
            <div class="_col-6 _col-lg-12">
              Медиа-информация: картинки (включая их обработку и настройку
              размеров) товаров, картинки групп товаров
            </div>
          </div>
          <div class="_col-12 _col-md-8 _col-lg-2 _p-n _row UnderImage-item">
            <div class="_col-6 _col-lg-12 UnderImage-box">
              <img src="@/assets/svg/block3-5.svg" alt="" class="UnderImage" />
            </div>
            <div class="_col-6 _col-lg-12">
              Быстрая обработка данных благодаря современному стеку технологий
            </div>
          </div>
          <div class="_col-12 _col-md-8 _col-lg-2 _p-n _row UnderImage-item">
            <div class="_col-6 _col-lg-12 UnderImage-box">
              <img src="@/assets/svg/block3-6.svg" alt="" class="UnderImage" />
            </div>
            <div class="_col-6 _col-lg-12 UnderImage-lastText">
              Все внесённые изменения уже на сайте!
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Block from "./components/BLock/Block.vue";
@Options({
  components: {
    Block
  }
})
export default class Description extends Vue {}
</script>

<style lang="scss" scoped>
.description {
  min-height: 1060px;
  background-color: #ff6f43;
  position: relative;
  z-index: 10;
}
.blocks {
  display: flex;
  justify-content: space-between;
  position: relative;
  top: -100px;
  width: 100%;
  flex-wrap: wrap;
}
.image-wrapper {
  position: relative;
  // top: -100px;
}
.image {
  padding-top: 20px;
  height: 175px;
  width: 95%;
  background-image: url("~@/assets/svg/magicPlatform.svg");
  background-size: 100%;
  background-repeat: no-repeat;
}
.blockImage {
  display: block;
  max-width: 100%;
}
.text {
  position: relative;
  top: -50px;
}
.textUnderImage {
  display: flex;
  padding-top: 20px;
  justify-content: center;
  font-family: TTFirs-Medium;
  font-size: 14px;
  line-height: 125%;
  color: #19181b;
}
.UnderImage-item {
  align-items: flex-start;
  padding-left: 15px;
  &:first-child .UnderImage-box,
  &:last-child .UnderImage-box {
    position: relative;
    border: none;
    &:before,
    &:after {
      display: block;
      position: absolute;
      content: "";
    }
  }
}
.UnderImage-box {
  display: flex;
  height: 100%;
  min-height: 127px;
  max-width: 140px;
  justify-content: center;
  align-items: center;
  border: 1px solid #19181b;
  border-top: 0;
  border-bottom: 0;
}
.UnderImage {
  position: relative;
  z-index: 2;
  max-width: 100%;
  max-height: 100%;
}
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
}

@media (max-width: 959px) {
  .description{
    padding-bottom: 50px;
  }
  .UnderImage-item {
    align-items: center;
    &:first-child .UnderImage-box {
      padding-bottom: 15px + 30;
      &:before {
        width: 1px;
        top: 50%;
        bottom: 30px;
        background-color: #19181b;
      }
      &:after {
        height: 30px;
        left: 0;
        right: 0;
        bottom: 0;
        border: 1px solid #19181b;
        border-bottom: 0;
      }
    }
    &:last-child .UnderImage-box {
      padding-top: 15px + 30;
      &:before {
        width: 1px;
        top: 30px;
        bottom: 50%;
        background-color: #19181b;
      }
      &:after {
        height: 30px;
        top: 0;
        left: 0;
        right: 0;
        border: 1px solid #19181b;
        border-top: 0;
      }
    }
  }
}

@media (min-width: 960px) {
  .UnderImage-box {
    height: auto;
    min-height: 165px;
    max-width: 100%;
    justify-content: flex-start;
    border: 1px solid #19181b;
    border-left: 0;
    border-right: 0;
  }
  .UnderImage-item {
    padding-left: 0;
    &:first-child .UnderImage-box {
      padding-right: 15px + 15;
      justify-content: center;
      &:before {
        height: 1px;
        left: 50%;
        right: 15px;
        background-color: #19181b;
      }
      &:after {
        width: 15px;
        top: 0;
        right: 0;
        bottom: 0;
        border: 1px solid #19181b;
        border-right: 0;
      }
    }
    &:last-child .UnderImage-box {
      padding-left: 15px + 15;
      justify-content: center;
      &:before {
        height: 1px;
        left: 15px;
        right: 50%;
        background-color: #19181b;
      }
      &:after {
        width: 15px;
        top: 0;
        left: 0;
        bottom: 0;
        border: 1px solid #19181b;
        border-left: 0;
      }
    }
    &:last-child .UnderImage-lastText {
      padding-left: 45px;
    }
  }
}

@media (min-width: 1200px) {
  .UnderImage-box {
    min-height: 203px;
  }
}
</style>
