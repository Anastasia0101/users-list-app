<template>
  <div class="page">
    <section class="page__section">
      <h2 class="title">Working with GET request</h2>
      <UsersList />
    </section>
    <section class="page__section">
      <h2 class="title">Working with POST request</h2>
      <SingUpForm />
    </section>
  </div>
</template>

<script>
import UsersList from "../components/UsersList.vue";
import SingUpForm from "../components/SignUpForm.vue";

export default {
  name: "MainPage",
  components: { 
    UsersList,
    SingUpForm,
  },
};
</script>

<style lang="sass" scoped>
@import "../../src/sass/styles"

.page 
  background: #F8F8F8

.page__section
  max-width: 1170px
  margin: 0 auto

.title
  @include heading-text
  text-align: center
  padding-top: 90px 
</style>