<template>
  <div class="block4">
    <div class="_container">
      <h2 class="text">Стоимость внедрения</h2>
      <div class="blocks _row">
        <div class="_col-12 _col-md-6 _col-lg-8 _col-xl-8">
          <div class="block1">
            <div class="block1-main">
              <div class="block1-text">Типовые условия</div>
              <div class="block1-list">
                <ul class="_row">
                  <li class="_col-12 _col-lg-6">Аудит 1С (по желанию)</li>
                  <li class="_col-12 _col-lg-6">Индивидуальный дизайн</li>
                  <li class="_col-12 _col-lg-6">Подготовка инфраструктуры</li>
                  <li class="_col-12 _col-lg-6">Установка</li>
                  <li class="_col-12 _col-lg-6">Тестирование</li>
                  <li class="_col-12 _col-lg-6">Запуск (1 месяц поддержки)</li>
                </ul>
              </div>
              <div class="block1-hint">
                почему цена от <img src="@/assets/svg/hint.svg" />
                <div class="block1-hint-message">
                  <div class="block1-hint-message-text">
                    Каждый проект рассчитывается индвивидуально, на сайте указан
                    оптимальный бюджет
                  </div>
                </div>
                <div class="block1-hint-message-skew"></div>
              </div>
              <div class="block1-price">
                <div class="block1-price-new">от 500 000 руб.</div>
                <div class="block1-price-old">от 600 000 руб.</div>
              </div>
            </div>
            <div class="block1-footer">
              <img src="@/assets/svg/persent.svg" />
              Скидка 20 % действует 20 дней 11:55:32
            </div>
          </div>
        </div>
        <div class="_col-12 _col-md-6 _col-lg-4 _col-xl-4">
          <div class="block2">
            <div class="block2-text">
              Заказать внедрение или получить бесплатную консультацию
            </div>
            <form action="">
              <input type="text" placeholder="Имя" />
              <input type="tel" placeholder="Телефон" />
              <input type="email" placeholder="Email" />
              <HardButton />
              <div class="block2-agreement">
                <div
                  class="block2-agreement-checkbox"
                  @click="toggleCheckbox = !toggleCheckbox"
                >
                  <img
                    v-if="toggleCheckbox"
                    src="@/assets/svg/checkbox.svg"
                    alt=""
                  />
                </div>
                <div class="block2-agreement-text">
                  Я согласен с условиями обработки
                  <span>персональных данных</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HardButton from "./components/HardButton/HardButton.vue";

@Options({
  components: {
    HardButton
  }
})
export default class Block4 extends Vue {
  private toggleCheckbox = false;
}
</script>

<style lang="scss" scoped>
._container {
  padding-bottom: 130px;
}
.block4 {
  background-image: url("~@/assets/svg/block4BG.svg");
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  background-color: black;
  & ._container {
    height: 100%;
  }
}
.text {
  padding-top: 100px;
  color: #ffffff;
}
.block {
  &s {
    padding-top: 60px;
    display: flex;
  }
  &1 {
    height: 100%;
    position: relative;
    &-main {
      width: 100%;
      border-left: 1px solid #fff;
      border-right: 1px solid #fff;
      border-top: 1px solid #fff;
      box-sizing: border-box;
      padding: 60px 60px 44px;
      box-sizing: border-box;
    }
    &-text {
      font-family: TTFirs-Bold;
      font-size: 48px;
      line-height: 125%;
      letter-spacing: 0.06em;
      color: #ffffff;
    }
    &-list {
      & ul {
        column-count: 2;
        padding: 0px;

        & li {
          position: relative;
          padding: 5px 15px 5px 20px;
          list-style-type: none;
          font-family: TTFirs-Medium;
          font-size: 20px;
          line-height: 150%;
        }
        & li:before {
          position: absolute;
          top: 5px;
          left: 0;
          content: "~";
          color: #ff6f43;
        }
      }
    }
    &-hint {
      position: relative;
      padding-top: 35px;
      font-family: TTFirs-Medium;
      font-size: 14px;
      line-height: 150%;
      text-decoration-line: underline;
      color: #6d73ff;
      display: inline-flex;
      &:hover {
        cursor: pointer;
        & .block1-hint-message,
        .block1-hint-message-skew {
          display: block;
        }
      }
      & img {
        padding-left: 5px;
      }
      &-message {
        position: absolute;
        top: -82px;
        left: 0;
        display: none;
        z-index: 50;
        &-text {
          width: 240px;
          height: 64px;
          background: #ffffff;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          font-family: TTFirs-Medium;
          font-size: 14px;
          line-height: 125%;
          color: #19181b;
          padding-left: 12px;
          padding-right: 10px;
          padding-top: 14px;
          box-sizing: border-box;
          background-color: #fff;
          overflow: visible;
        }
        &-skew {
          position: absolute;
          top: -40px;
          left: 0;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          background-color: #fff;
          width: 240px;
          height: 50px;
          transform: skew(0deg, -10deg);
          display: none;
        }
      }
    }
    &-price {
      padding-top: 10px;
      display: flex;
      justify-content: space-between;
      &-new {
        font-family: TTFirs-Bold;
        font-size: 36px;
        line-height: 125%;
        letter-spacing: 0.06em;
        color: #ffffff;
        padding-right: 30px;
      }
      &-old {
        font-family: TTFirs-Bold;
        font-size: 36px;
        line-height: 125%;
        letter-spacing: 0.06em;
        text-decoration-line: line-through;
        color: #ffffff;
        opacity: 0.2;
      }
    }
    &-footer {
      display: flex;
      min-height: 71px;
      padding: 15px;
      border-radius: 0 0 40px 40px;
      background-color: #ff6f43;
      font-family: TTFirs-Bold;
      font-size: 20px;
      line-height: 150%;
      color: #19181b;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      & img {
        padding-right: 30px;
      }
    }
  }
  &2 {
    height: 100%;
    border: 1px solid white;
    border-radius: 0 0 40px 40px;
    background-color: #fff;
    padding: 60px 60px 0 60px;
    box-sizing: border-box;
    &-text {
      font-family: TTFirs-Bold;
      font-size: 18px;
      line-height: 125%;
      letter-spacing: 0.06em;
      color: #19181b;
      padding-bottom: 15px;
    }
    & input {
      outline: none;
      border: none;
      border-bottom: 1px solid #19181b;
      height: 30px;
      margin-bottom: 30px;
      width: 100%;
      &::placeholder {
        font-family: TTFirs-Medium;
        font-size: 14px;
        line-height: 125%;
        letter-spacing: 0.06em;
        color: #19181b;
      }
    }
    &-agreement {
      display: flex;
      padding-top: 25px;
      &-checkbox {
        width: 14px;
        height: 14px;
        border: 1px solid #19181b;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
          cursor: pointer;
        }
      }
      &-text {
        font-family: TTFirs-Medium;
        font-size: 10px;
        line-height: 125%;
        letter-spacing: 0.06em;
        color: #19181b;
        padding-left: 20px;
        width: 80%;
        & span {
          color: #6d73ff;
        }
      }
    }
  }
}
@media (max-width: 960px){
  .block1-main{
    padding: 40px
  }
}
@media (min-width: 320px) and (max-width: 640px) {
  .block2{
    margin-top: 50px;
    padding-bottom: 30px;
  }
  .block1-price {
    display: block;
  }
  .block1-price-new {
    font-size: 24px;
  }
  .block1-price-old {
    font-size: 24px;
  }
}
</style>
