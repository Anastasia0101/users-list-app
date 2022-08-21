<template>
  <form class="form" @submit.prevent="onFormSubmit()">
    <div class="form-fields">
      <input type="text" placeholder="Your name" v-model="state.name" class="form-fields__input" />
      <input type="email" placeholder="Email" v-model="state.email" class="form-fields__input" />
      <input type="text" placeholder="Phone" v-model="state.phone" class="form-fields__input" />

      <Positions v-model="state.positionId" class="form-fields__radio" />

      <div class="form-fields__file-input">
        <label for="file-input" class="label">Upload</label>
        <p class="file-name">{{state.photo.name}}</p>
        <input id="file-input" type="file" accept=".jpg, .jpeg" @change="onFileChange($event)" class="file-input"/>
      </div>
    </div>
    <button type="submit" :disabled="formValidation$.$invalid" class="form__button">Sign up</button>
  </form>
</template>

<script setup>
import Positions from './Positions.vue';

import { reactive } from '@vue/reactivity';

import useVuelidate from '@vuelidate/core';
import { 
  required, 
  email, 
  helpers, 
  requiredIf, 
  maxLength, 
  minLength 
} from "vuelidate/lib/validators";

const regexpLettersSpace = helpers.regex('regexpLettersSpace', /^[a-zA-Z\s]*$/);
const regexpPhone = helpers.regex('regexpPhone', /^[+]{0,1}380([0-9]{9})$/);
const mustHaveLetters = (value) => !!value.trim().length;

const state = reactive({
  name: "",
  email: "",
  phone: "",
  positionId: 0,
  photo: {}
});

const rules = {
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
      return !state.photo.length;
    })
  }
};

const formValidation$ = useVuelidate(rules, state);

function onFileChange(event) {
  state.photo = event.target.files[0];
}

function onFormSubmit() {
  let formData = new FormData();
  formData.append('position_id', state.positionId); 
  formData.append('name', state.name);
  formData.append('email', state.email);
  formData.append('phone', state.phone);
  formData.append('photo', state.photo);
  saveUser(formData);
}

function saveUser(formData) {
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
</script>

<style lang="sass" scoped>
@import "../../src/sass/styles"

.form
  display: flex
  flex-direction: column
  justify-content: center
  
.form-fields
  width: 380px
  margin: 0 auto

.form-fields__input
  height: 54px
  width: 100%
  margin: 25px 0
  border-radius: 4px
  border: 1px solid #D0CFCF
  padding: 14px
  box-sizing: border-box
  background-color: $backgroundColor

.form-fields__input::placeholder
  @include base-text

.form__button
  @include button
  @include base-text
  margin: 0 auto

.form-fields__file-input
  display: flex
.label
  display: inline-block
  cursor: pointer
  height: 54px
  width: 83px
  border: 1px solid #000000
  @include base-text
  line-height: 54px
  border-top-left-radius: 4px
  border-bottom-left-radius: 4px

.file-name
  @include base-text
  line-height: 54px
  border: 1px solid #D0CFCF

.file-input
  display: none
</style>