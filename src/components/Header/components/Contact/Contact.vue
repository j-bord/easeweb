<template>
  <div class="contact">
    <a class="phone" href="tel:+74951234567">+7 (495) 123-45-67</a>
    <div class="text" @click="showModal">
      БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import store from "@/store";
@Options({})
export default class Contact extends Vue {
  showModal() {
    store.dispatch("showModal");
  }
}
</script>

<style lang="scss" scoped>
.phone {
  font-family: TTFirs-Bold;
  font-size: 24px;
  line-height: 125%;
  text-align: right;
  letter-spacing: 0.06em;
  color: #ffffff;
  white-space: nowrap;
  text-decoration: none;
}
.text {
  font-family: TTFirs-Bold;
  font-size: 12px;
  line-height: 125%;
  text-align: right;
  letter-spacing: 0.06em;
  text-decoration-line: underline;
  color: #ff6f43;
  &:hover {
    cursor: pointer;
  }
}
@media (max-width: 960px){
  .contact{
    margin-right: 20px;
  }
}
@media (min-width: 960px) and (max-width: 1200px) {
  .phone {
    font-size: 24px;
  }
  .text {
    font-size: 11px;
  }
}
@media (min-width: 640px) and (max-width: 960px) {
  .phone {
    font-size: 24px;
  }
  .text {
    font-size: 11px;
  }
}
@media (min-width: 320px) and (max-width: 480px) {
  .contact{
    display: flex;
    flex-direction: column;    
    justify-content: center;
  }
  .phone {
    font-size: 14px;
  }
  .text {
    font-size: 6px;
    margin-top: 5px;
  }
}
</style>
