<template>
  <div class="header">
    <div class="_container">
      <div class="firstLine">
        <Logo />
        <Contact />
      </div>
      <Text />
      <UnderText />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Logo from "./components/Logo/Logo.vue";
import Contact from "./components/Contact/Contact.vue";
import Text from "./components/Text/Text.vue";
import UnderText from "./components/UnderText/UnderText.vue";
@Options({
  components: {
    Logo,
    Contact,
    Text,
    UnderText
  }
})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
.header {
  background-image: url("~@/assets/svg/headerBG.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  min-height: 768px;
  width: 100%;
}
.firstLine {
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  width: 100%;
}
@media (min-width: 320px) and (max-width: 480px) {
  .header {
    min-height: 600px;
  }
}
</style>
