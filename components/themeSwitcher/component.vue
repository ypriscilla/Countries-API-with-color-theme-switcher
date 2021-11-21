<template>
  <!-- @click = shorthand of v-on:click -->
  <div class="theme_switcher" @click="setTheme">
    <span
      :class="{
        'icon-moon-inv': getTheme == 'Dark',
        'icon-moon': getTheme == 'Light',
      }"
    ></span>
    Dark Mode
  </div>
</template>

<script>
export default {
  name: "themeSwitcher",
  components: {},
  computed: {
    getTheme() {
      return this.$store.getters.getTheme;
    },
  },
  methods: {
    setTheme() {
      this.$store.dispatch("setTheme");
    },
  },
  mounted() {},
  beforeMount() {},
};
</script>

<style lang="scss" src="./style.scss" scoped />
