<template>
  <Suspense>
    <template #default>
      <MainPage />
    </template>
    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>

<script>
import MainPage from "./views/MainPage.vue";

export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<style lang="sass">

@import url("https://use.typekit.net/cjp4srr.css")

body
  text-align: center
  margin: 0

</style>
