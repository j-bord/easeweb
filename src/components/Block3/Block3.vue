<template>
  <div class="block3">
    <div class="block3inside _container">
      <div class="sign" @click="showModal"></div>
      <h2 class="_col-12">
        <span class="textLine textLine1">решаем проблемы</span>
        <span class="textLine textLine2">бизнеса|</span>
      </h2>
      <div class="_row ">
        <div class="text _col-12 _col-md-9 _row _p-n">
          <div class="_row">
            <div class="text-bold _col-12 _col-sm-6 _col-lg-4">
              ONLINE доступ к данным
            </div>
            <div class="text-medium _col-12 _col-sm-5 _col-lg-7">
              Все изменения по номенклатуре, контрагентам и связанным с ними
              документами отображаются на сайте сразу, без синхронизаций!
            </div>
            <div class="text-bold _col-12 _col-sm-6 _col-lg-4">
              Работает на типовых конфигурациях
            </div>
            <div class="text-medium _col-12 _col-sm-5 _col-lg-7">
              Функциональность поставляется в виде расширения для 1С. Нет
              необходимости изменять конфигурацию платформы
            </div>
            <div class="text-bold _col-12 _col-sm-6 _col-lg-4">
              Скорость работы
            </div>
            <div class="text-medium _col-12 _col-sm-5 _col-lg-7">
              Благодаря современному стеку технологий, сайт на нашей платформе
              быстрый даже на недорогих веб-серверах!
            </div>
          </div>
        </div>
        <div class="numbers _col-12 _col-md-3 _row">
          <div class="number-block _col-6 _col-md-12 _p-n">
            <div class="number-bold">1000+</div>
            <div class="number-medium">Клиентов на одном ядре процессора</div>
          </div>
          <div class="number-block _col-6 _col-md-12 _p-n">
            <div class="number-bold">50</div>
            <div class="number-medium">средняя оценка от Google</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import store from "@/store";
import { mapState } from "vuex";
@Options({
  computed: {
    ...mapState(["modal"])
  }
})
export default class Block3 extends Vue {
  private modal!: boolean;
  showModal() {
    store.dispatch("showModal");
  }
}
</script>

<style lang="scss" scoped>
.block3 {
  & ._container {
    background-image: url("~@/assets/svg/block3BG.svg");
    background-repeat: repeat-y;
    background-position: top center;
    background-size: 1130px auto;
    // margin-bottom: -100px;
  }
  &inside {
    position: relative;
  }
}
.block3inside {
  padding-bottom: 100px;
}
.textLine {
  display: block;
  &1 {
    padding-top: 122px;
    color: #19181b;
  }
  &2 {
    display: flex;
    justify-content: flex-end;
    color: #ff6f43;
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

.sign {
  background-image: url("~@/assets/svg/sign.svg");
  width: 166px;
  height: 166px;
  position: absolute;
  bottom: -83px;
  right: 174px;
  animation: spin 15s linear 0s infinite;
  &:hover {    
    cursor: pointer;
  }
}
.wrapper-text {
  display: flex;
}
.text {
  color: #19181b;
  line-height: 125%;
  display: flex;
  justify-content: flex-end;
  // max-width: 660px;
  padding-top: 20px;
  &-bold {
    font-family: TTFirs-Bold;
    font-size: 24px;
    letter-spacing: 0.06em;
    width: 264px;
    line-height: 1.25;
  }
  &-medium {
    font-family: TTFirs-Medium;
    font-size: 16px;
  }
}
.number {
  &s {
    padding-top: 100px;
    overflow: hidden;
  }
  &-block {
    padding-bottom: 40px;
  }
  &-bold {
    font-family: TTFirs-Bold;
    font-size: 3.5rem;
    line-height: 125%;
    letter-spacing: 0.06em;
    color: #19181b;
  }
  &-medium {
    font-family: TTFirs-Medium;
    font-size: 16px;
    line-height: 125%;
    color: #19181b;
  }
}
@media (min-width: 640px) and (max-width: 980px) {
  
  .number {  
    &-bold{
      font-size: 3rem;
    }
  }
  .numbers {
    padding-left: 20px;
    
  }
  .sign {
    right: 54px;
    z-index: 10;
  }
}
@media (min-width: 320px) and (max-width: 640px) {
  .number {  
    &-bold{
      font-size: 2.25rem;
    }
  }
  .sign{
    display: none;
  }
  .textLine1 {
    display: flex;
  }
}
</style>
