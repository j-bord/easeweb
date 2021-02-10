<template>
  <div class="hardButton" @click="close">
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
  private modal!: boolean;
  close() {
    store.dispatch("closeModal");
  }
}
</script>

<style lang="scss" scoped>
.hardButton {
  font: 14px/26px Arial, sans-serif;
  background-image: linear-gradient(#19181b, #19181b),
    linear-gradient(#19181b, #19181b), linear-gradient(#19181b, #19181b),
    linear-gradient(#19181b, #19181b);
  background-repeat: no-repeat;
  background-size: 8px 1px;
  background-position: top left, top right, bottom left, bottom right;
  border: solid #19181b;
  text-align: center;
  border-width: 0 1px;
  vertical-align: top;
  padding: 0 15px;
  line-height: 20px;
  color: #19181b;
  transition: 300ms ease-in-out;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0 5px;
  &:hover {
    padding: 0 20px;
    margin: 0;
    // background-color: #ff6f43;
    cursor: pointer;
  }
}
</style>
