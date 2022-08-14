<template>
  <div class="page">
    <Suspense timeout="0">
      <template #default>
        <!-- <UsersList /> -->
        <SingUpForm />
      </template>
  
      <template #fallback>
        Loading...
      </template>
    </Suspense>
  </div>
</template>

<script>
// import UsersList from "../components/UsersList.vue";
import SingUpForm from "../components/SignUpForm.vue";

export default {
  name: "MainPage",
  components: { 
    // UsersList,
    SingUpForm,
  },
};
</script>

<style scoped>
.page {
  background: #f8f8f8;
}
</style>