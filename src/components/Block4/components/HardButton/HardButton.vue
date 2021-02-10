<template>
  <div class="hardButton">ЗАКАЗАТЬ ВНЕДРЕНИЕ</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class HardButton extends Vue {}
</script>

<style lang="scss" scoped>
.hardButton {
  font: 14px/26px Arial, sans-serif;
  background-image: linear-gradient(#ff6f43, #ff6f43),
    linear-gradient(#ff6f43, #ff6f43), linear-gradient(#ff6f43, #ff6f43),
    linear-gradient(#ff6f43, #ff6f43);
  background-repeat: no-repeat;
  background-size: 8px 1px;
  background-position: top left, top right, bottom left, bottom right;
  border: solid #ff6f43;
  border-width: 0 1px;
  display: inline-block;
  vertical-align: top;
  width: 100%;
  height: 60px;
  line-height: 20px;
  color: #ff6f43;
  font-family: TTFirs-Bold;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  letter-spacing: 0.06em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  padding: 0;
  transition: 300ms ease-in-out;
  &:hover {
    margin: 0;
    padding: 0 5px;
    cursor: pointer;
  }
}
</style>
