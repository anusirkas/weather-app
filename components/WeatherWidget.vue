<template>
  <div
    :class="[
      'flex flex-col items-center justify-center text-white rounded-3xl shadow-2xl max-w-sm mx-auto p-8 transition-all duration-700',
      weatherClass
    ]"
  >
    <div class="text-6xl mb-2">{{ weatherIcon }}</div>
    <h2 class="text-2xl font-bold tracking-wide mb-1">
      {{ weather?.name || '...' }}
    </h2>
    <p class="text-lg capitalize mb-4">
      {{ weather?.weather?.[0].description || 'Laen...' }}
    </p>
    <p class="text-4xl font-semibold">
      {{ weather?.main?.temp }}°C
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const weather = ref(null)
const weatherClass = ref('bg-gradient-to-br from-gray-400 to-gray-600')
const weatherIcon = ref('⛅')

const fetchWeather = async () => {
  const apiKey = '801ddf6657be15f4aff7f1c0f7dc2100'
  const city = 'Tallinn'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=et`

  const res = await fetch(url)
  const data = await res.json()
  weather.value = data

  const main = data.weather[0].main.toLowerCase()

  if (main.includes('rain')) {
    weatherClass.value = 'bg-gradient-to-br from-blue-500 to-indigo-700'
    weatherIcon.value = '🌧️'
  } else if (main.includes('clear')) {
    weatherClass.value = 'bg-gradient-to-br from-yellow-300 to-yellow-600'
    weatherIcon.value = '☀️'
  } else if (main.includes('cloud')) {
    weatherClass.value = 'bg-gradient-to-br from-gray-300 to-gray-600'
    weatherIcon.value = '☁️'
  } else if (main.includes('snow')) {
    weatherClass.value = 'bg-gradient-to-br from-blue-100 to-white'
    weatherIcon.value = '❄️'
  } else {
    weatherClass.value = 'bg-gradient-to-br from-green-400 to-green-700'
    weatherIcon.value = '🌡️'
  }
}

onMounted(() => {
  fetchWeather()
})
</script>

<style scoped>
/* Smooth fade-in animation */
div {
  animation: fadeIn 1.2s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>


