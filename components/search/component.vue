<template>
  <div class="search">
    <input placeholder="Search a country" v-on:keyup.enter="handleEnter" />
    <span class="icon-search"></span>
  </div>
</template>

<script>
export default {
  name: "search",
  props: ["handleSearch"],
  components: {},
  methods: {
    handleEnter(e) {
      this.handleSearch(e);
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />
