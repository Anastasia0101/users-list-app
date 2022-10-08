<template>
  <header class="header">
    <img src="../assets/images/Logo.svg" alt="Logo" class="logo">
    <nav class="navigation">
      <router-link to="/#users-list" class="navigation__link link">Users</router-link>
      <router-link to="/#signup-form" class="navigation__link link">Sign up</router-link>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
@import "../../src/sass/styles"

.header
  display: flex
  justify-content: space-between
  align-items: center
  height: 60px

.logo
  height: 26px
  width: 104px

.navigation__link
  margin-left: 10px 

@media screen and (max-width: 1174px)
  .header
    width: 88%

@media screen and (max-width: 400px)
  .header
    width: 100%
</style>