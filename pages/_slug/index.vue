<template>
  <div class="error" v-if="errorMessage && !data">
    {{ errorMessage }}
  </div>
  <div class="container" v-else-if="data">
    <div class="back"></div>
    <div class="country">
      <div class="images">
        <img :src="data.flags.png" />
      </div>
      <div class="details">
        <h1>{{ data.name }}</h1>
        <div class="details__container__left">
          <div><span>Native Name:</span>{{ data.nativeName }}</div>
          <div><span>Population:</span>{{ data.population }}</div>
          <div><span>Region:</span>{{ data.region }}</div>
          <div><span>Sub Region:</span>{{ data.subregion }}</div>
          <div><span>Capital:</span>{{ data.capital }}</div>
        </div>

        <div class="details__container__right">
          <div>
            <span>Top Level Domain:</span>
            {{ data.topLevelDomain.join(",") }}
          </div>
          <div>
            <span>Currencies:</span>
            {{
              data.currencies
                .map((val) => {
                  return val.name;
                })
                .join(",")
            }}
          </div>
          <div>
            <span>Language:</span>
            {{
              data.languages
                .map((val) => {
                  return val.name;
                })
                .join(",")
            }}
          </div>
        </div>
        <div class="details__footer">
          <span>Border Countries:</span>
          <div v-for="(border, i) in borders" :key="i">
            {{ border.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countryAPI from "@/api/country";
export default {
  layout: "default",
  data() {
    return {
      isLoading: false,
      errorMessage: null,
      data: null,
    };
  },
  async asyncData({ $axios, params }) {
    try {
      let countryApi = new countryAPI($axios);
      let data = await countryApi.getCountryByCode(params.slug);

      let borders = await countryApi.getCountryByCodes(
        data.data.borders.join(",")
      );

      return {
        data: data.data,
        borders: borders.data,
      };
    } catch (e) {
      return {
        errorMessage: e.message,
      };
    }
  },
};
</script>
