<template>
  <p>Select your position</p>
  <div v-for="position in positions" :key="position.id">
    <input
      type="radio"
      :value="props.modelValue"
      @change="onPositionChange(position.id)"
    />
    <label>{{ position.name }}</label>
  </div>
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

<style>

</style>