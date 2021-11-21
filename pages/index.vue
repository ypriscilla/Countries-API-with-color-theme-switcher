<template>
  <div class="container">
    <Search />
    <FilterComponent :handleFilter="handleFilter" />
    <div class="">
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
