<template>
  <div class="form">
    <div class="_container _row">
      <h2 class="form-header _col-12">
        БЕСПЛАТНО ПОКАЖЕМ И РАССКАЖЕМ КАК РАБОТАЕТ ПЛАТФОРМА ДО ВНЕДРЕНИЯ
      </h2>
      <form class="_col-12 _p-n" action="">
        <div class="form-inputs _row">
          <div class="_col-12 _col-md-4 _col-lg-3">
            <input type="text" placeholder="ФИО" />
          </div>
          <div class="_col-12 _col-md-4 _col-lg-3">
            <input type="email" placeholder="Email" />
          </div>
          <div class="_col-12 _col-md-4 _col-lg-3">
            <input type="tel" placeholder="Номер телефона" />
          </div>
          <div class="_col-12 _col-md-12 _col-lg-3">
            <HardButton />
          </div>
        </div>
      </form>
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
export default class Form extends Vue {}
</script>

<style lang="scss" scoped>
.form {
  padding: 100px 0;
  background: #ff6f43;
  &-header {
    font-family: TTFirs-Bold;    
    line-height: 125%;
    letter-spacing: 0.06rem;
    text-transform: uppercase;
    color: #19181b;
  }
  & ._container {
    background-image: url("~@/assets/svg/form-gears.svg");
    background-position: right;
    background-repeat: no-repeat;
  }
  &-inputs {
    display: flex;
    justify-content: space-between;
    padding-top: 40px;
    & input {
      display: block;
      width: 100%;
      max-width: 290px;
      height: 60px;
      margin: 0 auto;
      background: #ffffff;
      border: 1px solid #19181b;
      padding: 20px;
      box-sizing: border-box;
      &::placeholder {
        font-family: TTFirs-Bold;
        font-size: 16px;
        line-height: 125%;
        letter-spacing: 0.06em;
        color: #a9a9a9;
      }
    }
  }
}
</style>
