<template>
  <div class="header">
    <div class="title">Where in the world?</div>
    <themeSwitcher />
  </div>
</template>

<script>
import themeSwitcher from "~/components/themeSwitcher/component.vue";

export default {
  name: "header",
  components: {
    themeSwitcher,
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />
