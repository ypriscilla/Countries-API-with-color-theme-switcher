<template>
  <div class="error" v-if="errorMessage && !data">
    {{ errorMessage }}
  </div>
  <div class="profile" v-else-if="data">
    <div class="back">
      <Button />
    </div>
    <div class="profile__content">
      <div class="images">
        <img :src="data.flags.png" :alt="data.name" />
      </div>
      <div class="details">
        <h1>{{ data.name }}</h1>
        <div class="details__container">
          <div class="details__container__left">
            <div class="details__container__text">
              <span>Native Name:</span>{{ data.nativeName }}
            </div>
            <div class="details__container__text">
              <span>Population:</span>{{ data.population }}
            </div>
            <div><span>Region:</span>{{ data.region }}</div>
            <div><span>Sub Region:</span>{{ data.subregion }}</div>
            <div><span>Capital:</span>{{ data.capital }}</div>
          </div>

          <div class="details__container__right">
            <div class="details__container__text">
              <span>Top Level Domain:</span>
              {{ data.topLevelDomain && data.topLevelDomain.join(",") }}
            </div>
            <div class="details__container__text">
              <span>Currencies:</span>
              {{
                data.currencies &&
                data.currencies
                  .map((val) => {
                    return val.name;
                  })
                  .join(",")
              }}
            </div>
            <div class="details__container__text">
              <span>Language:</span>
              {{
                data.languages &&
                data.languages
                  .map((val) => {
                    return val.name;
                  })
                  .join(",")
              }}
            </div>
          </div>
        </div>
        <div class="details__footer" v-if="borders">
          <span>Border Countries:</span>
          <div class="details__border">
            <Button v-for="(border, i) in borders" :key="i" :country="border" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countryAPI from "@/api/country";
import Button from "@/components/button/component";

export default {
  name: "profile",
  layout: "default",
  components: {
    Button,
  },
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

      let borders;
      if (data.data.borders) {
        borders = await countryApi.getCountryByCodes(
          data.data.borders.join(",")
        );
      }

      return {
        data: data.data,
        borders: borders ? borders.data : null,
      };
    } catch (e) {
      return {
        errorMessage: e.message,
      };
    }
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />
