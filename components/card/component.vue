<template>
  <div class="card">
    <NuxtLink :to="`/${country.alpha3Code}`" class="card__link">
      <div class="card__image">
        <img :src="country.flags.png" />
      </div>
      <div class="card__details">
        <div class="card__details__name">{{ country.name }}</div>
        <div class="card__details__population">
          <span>Population: </span>{{ country.population }}
        </div>
        <div class="card__details__region">
          <span>Region: </span>{{ country.region }}
        </div>
        <div class="card__details__capital">
          <span>Capital: </span>{{ country.capital }}
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "countryCard",
  props: ["country"],
};
</script>

<style lang="scss" src="./style.scss" scoped />
