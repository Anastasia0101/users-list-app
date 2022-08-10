<template>
  <div>
    <ul class="list">
      <li v-for="user in users" :key="user.id" class="list__item">
        <UserItem :user="user" />
      </li>
    </ul>
    <button type="button" v-if="isDisplayButton" @click="showMoreUsers()">
      Show more
    </button>
  </div>
</template>

<script>
import UserItem from "./UserItem.vue";

export default {
  name: "UsersList",
  components: {
    UserItem,
  },
  data() {
    return {
      users: [],
      usersNumber: 6,
      isDisplayButton: true,
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      const url = `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${this.usersNumber}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.users = data.users.sort((firstUser, secondUser) => {
            return firstUser.registration_timestamp - secondUser.registration_timestamp;
          }).reverse();
          this.isDisplayButton = data.users.length < data.total_users;
        });
    },
    showMoreUsers() {
      this.usersNumber += 6;
      this.getUsers();
    },
  },
};
</script>
<style scoped>
.list {
  max-width: 1170px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 29px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
}

.list__item {
  min-width: 284px;
  padding: 20px;
  width: 30%;
  height: 254px;
  background-color: #ffffff;
  border-radius: 10px;
  box-sizing: border-box;
  flex-grow: 1;
}

@media screen and (max-width: 915px) {
  .list {
    justify-content: center;
  }

  .list__item {
    flex-grow: 0;
  }
}
</style>