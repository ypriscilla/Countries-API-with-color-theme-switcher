<template>
  <div class="filter">
    <div class="filter__head">
      <div v-if="filter">
        {{ filter }}
      </div>
      <div v-else>Filter by Region <span class="icon-angle-down"></span></div>
    </div>
    <div class="filter__dropdown">
      <ul>
        <li
          v-for="(region, i) in regions"
          :key="i"
          @click.prevent="selectFilter(region)"
        >
          {{ region }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "filter",
  props: ["handleFilter"],
  data() {
    return {
      regions: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
      filter: null,
    };
  },
  methods: {
    selectFilter(region) {
      this.filter = region;
      this.handleFilter(region);
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />
