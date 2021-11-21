<template>
  <div :class="getTheme" class="layout">
    <HeaderComponent />
    <Nuxt />
  </div>
</template>

<script>
import HeaderComponent from "../components/header/component";
export default {
  mixins: [],
  components: {
    HeaderComponent,
  },
  head() {
    return {
      htmlAttrs: {
        lang: "en",
      },
    };
  },
  computed: {
    getTheme() {
      return this.$store.getters.getTheme;
    },
  },
  mounted() {},
  beforeMount() {},
};
</script>
