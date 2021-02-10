<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="close" @click="close()"></div>
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <div class="_row">
          <div class="_col-12">
            <div class="modal-header">
              БЕСПЛАТНО ПОКАЖЕМ И РАССКАЖЕМ КАК РАБОТАЕТ ПЛАТФОРМА ДО ВНЕДРЕНИЯ
            </div>
            <div class="modal-text">
              наши менеджеры ответят в течении 15 минут
            </div>
            <div class="modal-inputs">
              <input type="text" placeholder="ФИО" />
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Номер телефона" />
            </div>
          </div>

          <div class="_col-8">
            <HardButton />
          </div>
          <div class="_col-4">
            <div class="modal-agreement">
              <div
                class="modal-agreement-checkbox"
                @click="toggleCheckbox = !toggleCheckbox"
              >
                <img
                  v-if="toggleCheckbox"
                  src="@/assets/svg/checkbox.svg"
                  alt=""
                />
              </div>
              <div class="modal-agreement-text">
                Я согласен с условиями обработки
                <span>персональных данных</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HardButton from "@/components/HardButton/HardButton.vue";
import store from "@/store";
@Options({
  components: {
    HardButton
  }
})
export default class Modal extends Vue {
  private toggleCheckbox = false;
  close() {
    store.dispatch("closeModal");
  }
}
</script>

<style lang="scss" scoped>
.close {
  position: absolute;
  right: 40px;
  top: 40px;
  width: 30px;
  height: 30px;
  background-image: url("~@/assets/svg/close.svg");
  &:hover {
    cursor: pointer;
  }
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  // background-color: rgba(0, 0, 0, 0.5);
  background: #ff6f43;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1111;
}

.modal {
  z-index: 1111;
  background: #ffffff;
  border-radius: 0px 0px 60px 60px;
  padding: 30px 40px;
  max-width: 560px;

  &-header {
    font-family: TTFirs-Bold;
    font-size: 24px;
    line-height: 125%;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #19181b;
  }
  &-text {
    padding-top: 12px;
    font-family: TTFirs-Medium;
    font-size: 18px;
    line-height: 150%;
    color: #19181b;
  }
  &-inputs {
    display: flex;
    flex-direction: column;
    & input {
      margin-top: 30px;
      height: 60px;
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
  &-agreement {
    padding: 15px;
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
      padding-top: 12px;
      font-family: TTFirs-Medium;
      font-size: 10px;
      line-height: 125%;
      // letter-spacing: 0.06em;
      color: #19181b;
      width: 100%;
      & span {
        color: #6d73ff;
      }
    }
  }
}
@media (max-width: 640px){
  .modal-agreement{
    padding: 0;
  }
}
</style>
