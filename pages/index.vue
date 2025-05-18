<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 text-center p-4">
    <h1 class="text-3xl font-bold mb-8">Minu ilm</h1>
    <WeatherWidget />
  </div>
</template>

<script setup>
import WeatherWidget from '~/components/WeatherWidget.vue'
</script>
