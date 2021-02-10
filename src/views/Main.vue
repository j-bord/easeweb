<template>
  <div>
    <Modal v-if="modal" />
    <Header />
    <Description />
    <RotateBlock />
    <Block3 />
    <Block4 />
    <Slider />
    <Form />
    <Clients />
    <Footer />
  </div>
</template>

<script lang="ts">
import Modal from "@/components/Modal/Modal.vue";
import RotateBlock from "@/components/RotateBlock/RotateBlock.vue";
import Block3 from "@/components/Block3/Block3.vue";
import Block4 from "@/components/Block4/Block4.vue";
import Clients from "@/components/Clients/Clients.vue";
import Description from "@/components/Description/Description.vue";
import Footer from "@/components/Footer/Footer.vue";
import Form from "@/components/Form/Form.vue";
import Header from "@/components/Header/Header.vue";
import Slider from "@/components/Slider/Slider.vue";
import { Options, Vue } from "vue-class-component";
import { mapState } from "vuex";
@Options({
  components: {
    Modal,
    Header,
    Description,
    RotateBlock,
    Block3,
    Block4,
    Slider,
    Form,
    Clients,
    Footer
  },
  computed: {
    ...mapState(["modal"])
  }
})
export default class Home extends Vue {
  private modal!: boolean;
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: TTFirs-Bold;
  src: url("~@/assets/fonts/TTFirs-Bold.ttf");
}
@font-face {
  font-family: TTFirs-Medium;
  src: url("~@/assets/fonts/TTFirs-Medium.ttf");
}
</style>
