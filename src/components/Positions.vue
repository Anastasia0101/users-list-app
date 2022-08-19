<template>
  <p class="title">Select your position</p>
  <ul class="list">
    <li v-for="position in positions" :key="position.id" class="list__item">
      <input
        type="radio"
        name="position.name"
        :value="props.modelValue"
        @change="onPositionChange(position.id)"
        class="radio-input"
      />
      <label class="label">{{ position.name }}</label>
    </li>
  </ul>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: Number
});

const emit = defineEmits(['update:modelValue']);

const positionsUrl = "https://frontend-test-assignment-api.abz.agency/api/v1/positions";

const positions = await fetch(positionsUrl)
  .then((data) => data.json())
  .then((data) => data.positions);

function onPositionChange(positionId) {
  emit('update:modelValue', positionId);
}
</script>

<style lang="sass" scoped>
@import "../../src/sass/styles"

.title
  @include base-text
  text-align: left
  margin: 8px 0

  
.list
  list-style: none
  padding: 0
  margin: 0

.list__item
  text-align: left

.label
  @include base-text

.radio-input
  margin: 0 12px 0 0 

</style>