import axios from "axios";

export default class countryAPI {
  constructor($axios) {
    this.$axios = $axios;
  }

  getAllCountry(params) {
    return this.$axios.request({
      method: "GET",
      url: "https://restcountries.com/v2/all",
    });
  }

  getCountryByName(name) {
    return this.$axios.request({
      method: "GET",
      url: `https://restcountries.com/v2/name/${name}`,
    });
  }

  getCountryByCode(alpha) {
    return this.$axios.request({
      method: "GET",
      url: `https://restcountries.com/v2/alpha/${alpha}`,
    });
  }

  getCountryByCodes(alphas) {
    return this.$axios.request({
      method: "GET",
      url: `https://restcountries.com/v2/alpha/`,
      params: {
        codes: alphas,
      },
    });
  }

  getAllCountryByFilter(region) {
    return this.$axios.request({
      method: "GET",
      url: `https://restcountries.com/v2/region/${region}`,
    });
  }
}
