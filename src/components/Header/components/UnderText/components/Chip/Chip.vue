<template>
  <div class="chip _col-4 _col-md-6 _col-lg-4">
    <div class="header">{{ header }}</div>
    <div class="text">{{ body }}</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Options({})
export default class Chip extends Vue {
  @Prop(String) private readonly header: string | undefined;
  @Prop(String) private readonly body: string | undefined;
}
</script>

<style lang="scss" scoped>
.chip {
  font-size: 16px;
  line-height: 125%;
  color: #535353;

  & .header {
  }
  & .text {
    padding-top: 20px;
    color: #fff;
  }
}
</style>
