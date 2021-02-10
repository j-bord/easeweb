<template>
  <div class="hardButton" @click="showModal">
    ЗАКАЗАТЬ БЕСПЛАТНУЮ ДЕМОНСТРАЦИЮ
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
export default class HardButton extends Vue {
  showModal() {
    store.dispatch("showModal");
  }
}
</script>

<style lang="scss" scoped>
.hardButton {
  font: 14px/26px Arial, sans-serif;
  background-image: linear-gradient(white, white), linear-gradient(white, white),
    linear-gradient(white, white), linear-gradient(white, white);
  background-repeat: no-repeat;
  background-size: 8px 1px;
  background-position: top left, top right, bottom left, bottom right;
  border: solid white;
  text-align: center;
  border-width: 0 1px;
  display: block;
  vertical-align: top;
  padding: 10px 15px;
  line-height: 20px;
  color: white;
  // width: 100%;
  width: 270px;
  transition: 300ms ease-in-out;
  box-sizing: border-box;
  // margin-left: 5px;
  &:hover {
    // margin-left: 0;
    padding: 10px 20px;
    width: 280px;
    // background-color: #ff6f43;
    transform: translateX(-5px);
    cursor: pointer;
  }
}
@media (min-width: 320px) and (max-width: 480px) {
  .hardButton {
    width: calc(100% - 10px);
    margin: 0 5px !important;
    padding: 10px 100px;
    &:hover {
      margin: 0;
      padding: 10px 105px;
      width: calc(100% - 0px);
    }
  }
}
</style>
