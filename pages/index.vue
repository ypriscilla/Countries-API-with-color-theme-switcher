<template>
  <div class="home">
    <div class="controller">
      <Search :handleSearch="handleSearch" />
      <FilterComponent :handleFilter="handleFilter" />
    </div>
    <div class="home__list">
      <Card v-for="(country, i) in countries" :country="country" :key="i" />
    </div>
  </div>
</template>

<script>
import FilterComponent from "../components/filter/component";
import Search from "../components/search/component";
import Card from "../components/card/component";
import countryAPI from "../api/country";

export default {
  layout: "default",
  components: {
    FilterComponent,
    Search,
    Card,
  },
  data() {
    return {
      filter: null,
    };
  },
  methods: {
    handleFilter(filter) {
      this.filter = filter;
      this.fetchCountries();
    },
    fetchCountries() {
      let countryApi = new countryAPI(this.$axios);
      countryApi.getAllCountryByFilter(this.filter).then((res) => {
        this.countries = res.data;
      });
    },
    handleSearch(e) {
      let countryApi = new countryAPI(this.$axios);
      if (e.target.value) {
        countryApi.getCountryByName(e.target.value).then((res) => {
          this.countries = res.data;
        });
      } else {
        countryApi.getAllCountry().then((res) => {
          this.countries = res.data;
        });
      }
    },
  },
  async asyncData({ $axios }) {
    let countryApi = new countryAPI($axios);
    let data = await countryApi.getAllCountry();
    return {
      countries: data.data,
    };
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />
