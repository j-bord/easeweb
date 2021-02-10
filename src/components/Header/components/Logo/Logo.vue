<template>
  <div class="logo"></div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Logo extends Vue {}
</script>

<style lang="scss" scoped>
.logo {
  width: 100%;
  max-width: 226px;
  height: 48px;
  background-image: url("~@/assets/svg/logo.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
}
@media (max-width: 480px){
  .logo{
    width: 50%;
  }  
}
</style>
