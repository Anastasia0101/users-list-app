<template>
  <Header />
  <main class="main">
    <section class="main__section main__section--width-full">
      <Home />
    </section>
    <section id="users-list" class="main__section">
      <h2 class="title">Working with GET request</h2>
      <UsersList  />
    </section>
    <section id="signup-form" class="main__section">
      <h2 class="title">Working with POST request</h2>
      <SingUpForm />
    </section>
  </main>
</template>

<script>
import Header from "../components/Header.vue";
import UsersList from "../components/UsersList.vue";
import SingUpForm from "../components/SignUpForm.vue";
import Home from "../components/Home.vue";

export default {
  name: "MainPage",
  components: {
    UsersList,
    SingUpForm,
    Header,
    Home
},
};
</script>

<style lang="sass" scoped>
@import "../../src/sass/styles"

.header
  @include container
.main 
  background: #F8F8F8
  width: 100%

.main__section
  @include container

.main__section--width-full
  max-width: 100vw
  height: 90vh
  margin: 0

.title
  @include heading-text
  text-align: center
  padding-top: 90px 
</style>