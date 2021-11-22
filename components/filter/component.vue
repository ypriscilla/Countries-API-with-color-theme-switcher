<template>
  <div class="filter">
    <div class="filter__head" @click="dropdownSetting">
      <div v-if="filter">
        {{ filter }} <span class="icon-angle-down"></span>
      </div>
      <div v-else>Filter by Region <span class="icon-angle-down"></span></div>
    </div>
    <div
      class="filter__dropdown__backdrop"
      v-if="isActive"
      @click="dropdownSetting"
    ></div>
    <div class="filter__dropdown" :class="{ active: isActive }">
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
      isActive: false,
    };
  },
  methods: {
    selectFilter(region) {
      this.filter = region;
      this.handleFilter(region);
      this.isActive = false;
    },
    dropdownSetting() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />
