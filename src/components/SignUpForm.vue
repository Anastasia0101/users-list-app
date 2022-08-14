<template>
  <form class="form" @submit.prevent="onFormSubmit()">
    <input type="text" placeholder="Your name" v-model="state.name" class="form__input" />
    <input type="email" placeholder="Email" v-model="state.email" class="form__input" />
    <input type="text" placeholder="Phone" v-model="state.phone" class="form__input" />

    <PositionsList v-model="state.positionId" />

    <div>
      <label>Choose file to upload</label>
      <input type="file" accept=".jpg, .jpeg" @change="onFileChange($event)" />
    </div>
    <button type="submit" :disabled="formValidation$.$invalid">Sign up</button>
  </form>
</template>

<script setup>
import PositionsList from './PositionsList.vue';

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

<style>
</style>