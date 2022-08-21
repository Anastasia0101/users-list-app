<template>
  <div>
    <ul class="list">
      <li v-for="user in users" :key="user.id" class="list__item">
        <UserItem :user="user" />
      </li>
    </ul>
    <button type="button" class="button">
      Show more
    </button>
  </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import UserItem from "./UserItem.vue";

const state = reactive({
  usersNumber: 6,
});

const usersUrl = `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${state.usersNumber}`; 

const users = await fetch(usersUrl)
    .then((res) => res.json())
    .then((data) => {
      return data.users.sort((firstUser, secondUser) => {
        return firstUser.registration_timestamp - secondUser.registration_timestamp;
      }).reverse();
    });

</script>
<style lang="sass" scoped>
@import "../../src/sass/styles"
.list
  max-width: 1170px
  display: flex
  flex-flow: row wrap
  justify-content: space-between
  gap: 29px
  margin: 0 auto

.list__item 
  min-width: 284px
  padding: 20px
  width: 30%
  height: 254px
  background-color: #ffffff
  border-radius: 10px
  box-sizing: border-box
  flex-grow: 1

.button
  @include button
  @include base-text
  padding: 4px 18px

@media screen and (max-width: 915px) 
  .list 
    justify-content: center
  
  .list__item 
    flex-grow: 0

</style>