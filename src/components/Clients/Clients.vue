<template>
  <div class="clients">
    <div class="_container _row">
      <h2 class="_col-12">
        <span class="clients-header clients-header-1">НАШИ любимые</span>
        <span class="clients-header clients-header-2">КЛИЕНТЫ И ПАРТНЕРЫ</span>
      </h2>
      <div class="clients-logo _col-12 _p-n _row">
        <div class="_col-6 _col-lg-3">
          <img class="clients-img" src="@/assets/svg/client1.svg" alt="" />
        </div>
        <div class="_col-6 _col-lg-3">
          <img class="clients-img" src="@/assets/svg/client1.svg" alt="" />
        </div>
        <div class="_col-6 _col-lg-3">
          <img class="clients-img" src="@/assets/svg/client1.svg" alt="" />
        </div>
        <div class="_col-6 _col-lg-3">
          <img class="clients-img" src="@/assets/svg/client1.svg" alt="" />
        </div>
        <div class="_col-6 _col-lg-3">
          <img class="clients-img" src="@/assets/svg/client1.svg" alt="" />
        </div>
        <div class="_col-6 _col-lg-3">
          <img class="clients-img" src="@/assets/svg/client1.svg" alt="" />
        </div>
        <div class="_col-6 _col-lg-3">
          <img class="clients-img" src="@/assets/svg/client1.svg" alt="" />
        </div>
        <div class="_col-6 _col-lg-3" @click="showModal">
          <img
            class="clients-img clients-img-last"
            src="@/assets/svg/client-new.svg"
            alt=""
          />
        </div>
      </div>
    </div>
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
export default class Clients extends Vue {
  showModal() {
    store.dispatch("showModal");
  }
}
</script>

<style lang="scss" scoped>
.clients {
  background-color: #f5f5f5;
  padding-bottom: 100px;
  &-header {
    &-1 {
      display: block;
      padding-top: 80px;
    }
    &-2 {
      display: flex;
      justify-content: flex-end;
      color: #ff6f43;
    }
  }
  &-logo {
    padding-top: 27px;
  }
  &-img {
    display: block;
    max-width: 100%;
    margin: 0 auto;
    &-last {
      &:hover {
        cursor: pointer;
      }
    }
  }
}
@media (min-width: 320px) and (max-width: 480px) {
  .clients-header-1 {
    display: flex;
  }
  .clients-header-2 {
    display: flex;
    justify-content: flex-start;
  }
}
</style>
