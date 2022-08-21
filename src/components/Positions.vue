<template>
  <p class="title">Select your position</p>
  <ul class="list">
    <li v-for="position in positions" :key="position.id" class="list__item">
      <input
        type="radio"
        :id="position.name"
        name="position.name"
        :value="props.modelValue"
        @change="onPositionChange(position.id)"
        class="radio-input"
      />
      <label :for="position.name" class="label">{{ position.name }}</label>
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

.list__item
  text-align: left
  display: flex
  align-content: center
  margin-top: 8px

.label
  @include base-text
  margin-left: 12px
  cursor: pointer

.radio-input
  -moz-appearance: none
  appearance: none
  width: 20px
  height: 20px
  border: 1px solid #D0CFCF
  border-radius: 50%
  background-clip: content-box
  padding: 4px
  cursor: pointer
  
.radio-input:checked
  background-color: $secondaryColor
  border: 1px solid $secondaryColor
</style>