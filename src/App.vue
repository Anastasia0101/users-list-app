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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

body {
  margin: 0;
}
</style>
