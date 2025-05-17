<template>
  <div :class="weatherClass" class="p-4 rounded-xl shadow-xl text-center">
    <h2 class="text-xl font-bold mb-2">Ilm Tallinnas</h2>
    <p v-if="weather">{{ weather.weather[0].description }} – {{ weather.main.temp }}°C</p>
    <p v-else>Laen ilmaandmeid...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const weather = ref(null)
const weatherClass = ref('bg-gray-200')

const fetchWeather = async () => {
  const apiKey = '801ddf6657be15f4aff7f1c0f7dc2100'
  const city = 'Tallinn'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=et`

  const res = await fetch(url)
  const data = await res.json()
  weather.value = data

  const main = data.weather[0].main.toLowerCase()
  if (main.includes('rain')) weatherClass.value = 'bg-blue-200'
  else if (main.includes('clear')) weatherClass.value = 'bg-yellow-200'
  else if (main.includes('cloud')) weatherClass.value = 'bg-gray-300'
  else weatherClass.value = 'bg-green-200'
}

onMounted(() => {
  fetchWeather()
})
</script>

<style scoped>
/* Võin siia lisada rohkem dünaamilist stiili hiljem */
</style>