<template>
  <div :class="theme" class="layout">
    <HeaderComponent />
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "../components/header/component";

const themeList = ["Light", "Dark"];
export default {
  name: "default_layout",
  mixins: [],
  components: {
    HeaderComponent,
  },
  data() {
    return {
      theme: "Light",
    };
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
      return themeList[this.$store.state.layout.theme];
    },
  },
  watch: {
    getTheme(newVal) {
      this.theme = newVal;
    },
  },
  beforeMount() {
    if (localStorage.getItem("theme")) {
      this.$store.dispatch("setTheme", localStorage.getItem("theme"));
    } else {
      localStorage.setItem("theme", 0);
    }
  },
};
</script>
<style lang="scss" src="./style.scss" scoped />
