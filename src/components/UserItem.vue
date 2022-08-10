<template>
  <div class="user">
    <img :src="user.photo" alt="user's photo" class="user__image" />
    <h3 class="user__text">{{ user.name }}</h3>
    <p class="user__text">{{ user.position }}</p>
    <p class="user__text">{{ user.email }}</p>
    <p class="user__text">{{ user.phone }}</p>
  </div>
</template>

<script>
export default {
  name: "UserItem",
  props: {
    user: {
      name: String,
      email: String,
      phone: String,
      photo: String,
      position: String,
    },
  },
};
</script>

<style scoped>
.user__text {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>