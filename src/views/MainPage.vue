<template>
  <div class="page">
    <UsersList />
    <SingUpForm />
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

<style scoped>
.page {
  background: #f8f8f8;
}
</style>