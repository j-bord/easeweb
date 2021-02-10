<template>
  <div class="hardButton">ЗАКАЗАТЬ БЕСПЛАТНУЮ ДЕМОНСТРАЦИЮ</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class HardButton extends Vue {}
</script>

<style lang="scss" scoped>
.hardButton {
  background-image: linear-gradient(#000, #000), linear-gradient(#000, #000),
    linear-gradient(#000, #000), linear-gradient(#000, #000);
  background-repeat: no-repeat;
  background-size: 8px 1px;
  background-position: top left, top right, bottom left, bottom right;
  border: solid black;
  border-width: 0 1px;
  vertical-align: top;
  max-width: 290px;
  height: 60px;
  margin: 0 auto;
  color: #000;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  letter-spacing: 0.06em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  transition: 300ms ease-in-out;
  &:hover {
    margin: 0 5px;
    padding: 0 5px;
    cursor: pointer;
  }
}
@media(max-width: 960px){
  .hardButton{
    margin: 0 auto;
    &:hover{
      margin: 0 auto;
    }
  }
}
</style>
