<template>
  <form class="form" @submit.prevent="onFormSubmit()">
    <input type="text" placeholder="Your name" v-model="form.name" class="form__input" />
    <input type="email" placeholder="Email" v-model="form.email" class="form__input" />
    <input type="text" placeholder="Phone" v-model="form.phone" class="form__input" />

    <p class="form__text">Select your position</p>
    <div v-for="position in positions" :key="position.id" class="form__radio-input">
      <input
        type="radio"
        name="position"
        :value="position.id"
        v-model="form.positionId"
      />
      <label>{{ position.name }}</label>
    </div>
    <div>
      <label>Choose file to upload</label>
      <input type="file" name="profile_pic" accept=".jpg, .jpeg" @change="onFileChange" />
    </div>
    <button type="submit">Sign up</button>
  </form>
</template>

<script>
import { required, email, helpers, requiredIf, maxLength, minLength } from "vuelidate/lib/validators";
const regexpLettersSpace = helpers.regex('regexpLettersSpace', /^[a-zA-Z\s]*$/);
const regexpPhone = helpers.regex('regexpPhone', /^[+]{0,1}380([0-9]{9})$/);

const mustHaveLetters = (value) => !!value.trim().length;

export default {
  data() {
    return {
      positions: [],
      form: {
        name: "",
        email: "",
        phone: "",
        positionId: 0,
        photo: {}
      },
    };
  },
  validations: {
    form: {
      name: { 
        required, 
        regexpLettersSpace,
        mustHaveLetters,
        minLength: minLength(2),
        maxLength: maxLength(60),
      },
      email: { 
        required, 
        email,
        mustHaveLetters,
        minLength: minLength(2),
        maxLength: maxLength(100),
      },
      phone: {
        required,
        regexpPhone
      },
      positionId: {
        required,
        minLength: minLength(1),
      },
      photo: {
        required: requiredIf(function() {
          return !this.form.photo.length;
        })
      }
    }
  },
  created() {
    this.getPositions();
  },
  methods: {
    getPositions() {
      const url =
        "https://frontend-test-assignment-api.abz.agency/api/v1/positions";
      fetch(url)
        .then((data) => data.json())
        .then((data) => (this.positions = data.positions));
    },
    onFileChange() {
      this.form.photo = event.target.files[0];
    },
    onFormSubmit() {
      let formData = new FormData();
      formData.append('position_id', this.form.positionId); 
      formData.append('name', this.form.name);
      formData.append('email', this.form.email);
      formData.append('phone', this.form.phone);
      formData.append('photo', this.form.photo);
      this.saveUser(formData);
    },
    saveUser(formData) {
      const usersUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/users';
      const tokenUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/token';
      const requestOptions = {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: formData
      };
      fetch(tokenUrl)
        .then(res => res.json())
        .then(data => fetch(usersUrl, {...requestOptions, headers: {'Token': data.token}}))
    }
  }
}
</script>

<style>
</style>