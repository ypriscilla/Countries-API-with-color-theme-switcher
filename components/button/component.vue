<template>
  <div class="button" v-if="country">
    <NuxtLink :to="`/${country.alpha3Code}`">
      {{ country.name }}
    </NuxtLink>
  </div>
  <div class="button" v-else>
    <NuxtLink to="/"> <span class="icon-left"></span>Back </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "countryCard",
  props: ["country"],
};
</script>

<style lang="scss" src="./style.scss" scoped />
