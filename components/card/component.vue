<template>
  <div class="card">
    <div class="card__image">
      <img :src="country.flags.png" />
    </div>
    <div class="card__details">
      <div class="card__details__name">{{ country.name }}</div>
      <div class="card__details__population">{{ country.population }}</div>
      <div class="card__details__region">{{ country.region }}</div>
      <div class="card__details__capital">{{ country.capital }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "countryCard",
  props: ["country"],
};
</script>

<style lang="scss" src="./style.scss" scoped />
