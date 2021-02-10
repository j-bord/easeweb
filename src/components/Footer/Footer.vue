<template>
  <div class="footer">
    <div class="_container _row">
      <div class="block block-1 _col-12 _col-md-6 _col-lg-4">
        <div class="block-1-text-1">Политика конфиденциальности</div>
        <div class="block-1-text-2">
          © Все права защищены 2020 ООО “ИзиВанВеб"
        </div>
        <Logo />
      </div>
      <div class="block block-2  _col-12 _col-md-6 _col-lg-4">
        <div class="block-header">Контакты</div>
        <div class="block-text">
          <span>info@easyoneweb.ru 141108, Московская область, город Щёлково,
          Заводская улица, дом 15, офис 3-210</span>
          <p>
            <a
              href="https://yandex.ru/maps/10765/shelkovo/house/zavodskaya_ulitsa_15/Z0EYdgNkT0MAQFtvfXVxeXpjZQ==/?from=tabbar&ll=38.044668%2C55.908601&source=serp_navig&z=17.62"
              >маршрут</a
            >
          </p>
        </div>
        <div class="block-header"><a href="tel:+74951234567">+7 (495) 123-45-67</a></div>
      </div>
      <div class="block block-3  _col-12 _col-md-6 _col-lg-4">
        <div class="block-header">ЗАДАТЬ ВОПРОС</div>
        <div class="block-text">
          Задайте любой вопрос и наши менеджеры ответят в течении 15 минут
        </div>
        <HardButton />
        <div class="block-1-adaptiv">
          <div class="block-1-text-1">Политика конфиденциальности</div>
          <div class="block-1-text-2">
            © Все права защищены 2020 ООО “ИзиВанВеб"
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Logo from "@/components/Header/components/Logo/Logo.vue";
import HardButton from "./components/HardButton/HardButton.vue";

@Options({
  components: {
    Logo,
    HardButton
  }
})
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
.footer {
  padding: 50px 0;
  background-image: url("~@/assets/svg/footerBG1.svg");
  background-repeat: no-repeat;
  background-size: cover;

  & ._container {
    display: flex;

    justify-content: space-between;
  }
}
.logo{
  flex: 1;
  background-position: center bottom;
}
.block-1-adaptiv{
  display: none;
}
.block {
  &-1 {
    display: flex;
    flex-direction: column;
    padding-top: 75px;    
    &-text {
      &-1 {
        font-family: TTFirs-Medium;
        font-size: 18px;
        line-height: 150%;
        text-decoration-line: underline;
        color: #ffffff;
      }
      &-2 {
        padding-top: 18px;
        padding-bottom: 10px;
        font-family: TTFirs-Medium;
        font-size: 18px;
        line-height: 150%;
        color: #535353;
      }
    }
  }
  &-header {
    font-family: TTFirs-Bold;
    font-size: 36px;
    line-height: 125%;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #ffffff;
    a{
      color: inherit;
    }
  }
  &-text {
    padding-top: 28px;
    font-family: TTFirs-Medium;
    font-size: 18px;
    line-height: 150%;
    color: #ffffff;
    padding-bottom: 21px;
    & p {
      margin: 0;
      & a {
        margin: 0px;
        color: #ff6f43;
        text-decoration: underline;
      }
    }
  }
}
@media (max-width:960px){
  .footer ._container{
    justify-content: center;
  }
}
@media (max-width:767px){
  .footer ._container{
    justify-content: unset;
  }
}
@media (min-width: 320px) and (max-width: 640px) {
  .block-1{
    padding-top: 0;
  }
  .block-1-text-1,
  .logo,
  .block-header,
  .block-text {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .block-text,
  .block-1-text-2{
    text-align: center;
  }
  .logo {
    max-width: 100%;
    flex: unset;
    margin: 0 auto;
  }
  .hardButton {
    margin: 0 auto;    
  }
  .block-text,
  .block-1-text-2 {
    padding-left: 10%;
    padding-right: 10%;
  }
  .block-1{
    .block-1-text-1,
    .block-1-text-2{
      display: none;
    }
  }
  .block-2 .block-text{
    flex-direction: column;
  }
  .block-1-adaptiv{
    display: block;
    margin-top: 50px;
  }
  .block-3{
    align-items: center;    
    display: flex;
    flex-direction: column;
  }
}
</style>
