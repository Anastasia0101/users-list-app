<template>
  <div class="container">
    <div class="container__text-content text-content">
      <h1 class="text-content__title">Test assignment for front-end developer</h1>
      <p class="text-content__subtitle">What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
      <router-link to="/#signup-form" class="text-content__link link">Sign up</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
@import "../../src/sass/styles"

.container
  background: url(../assets/images/Background.svg) no-repeat center
  background-size: cover
  min-height: 100%
  min-width: 100%
  display: flex
  align-content: center

.container__text-content
  width: 380px
  margin: auto
  color: #FFFFFF
  padding: 1em

.text-content__title
  @include heading-text

.text-content__subtitle
  @include base-text
  margin: 21px 0

.text-content__link
  margin-top: 10px 
</style>