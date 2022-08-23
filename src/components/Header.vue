<template>
  <header class="header">
    <img src="../assets/images/Logo.svg" alt="Logo" class="logo">
    <nav class="navigation">
      <a href="#" class="navigation__link">Users</a>
      <a href="#" class="navigation__link">Sign up</a>
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
  @include base-text
  @include link
  margin-left: 10px 

@media screen and (max-width: 1174px)
  .header
    width: 88%

@media screen and (max-width: 400px)
  .header
    width: 100%
</style>