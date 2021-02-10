<template>
  <div class="hardButton" @click="showModal">НАПИСАТЬ НАМ</div>
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
  width: 140px;
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
  padding: 0 20px;
  transition: 300ms ease-in-out;
  margin: 0 5px;
  &:hover {
    margin: 0;
    padding: 0 25px;
    // background-color: #ff6f43;
    // color: white;
    cursor: pointer;
  }
}
</style>
