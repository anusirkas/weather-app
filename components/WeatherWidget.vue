<template>
  <div
    :class="[ 
        'flex flex-col items-center justify-center text-white rounded-2xl shadow-2xl max-w-sm w-full mx-auto p-6 sm:p-8 transition-all duration-700',
        'bg-gradient-to-br bg-white/10 backdrop-blur-md ring-1 ring-white/20',
        weatherClass
    ]"
  >

    <label for="city" class="mb-4 text-lg font-semibold text-white">Vali linn:</label>
    <select id="city" v-model="selectedCity" @change="fetchWeather" class="mb-6 text-black px-4 py-2 rounded-md">
      <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
    </select>

    <div class="text-6xl mb-2">{{ weatherIcon }}</div>
    <!-- Lisa teksti suurusele responsive klassid -->
    <h2 class="text-xl sm:text-2xl font-bold tracking-wide mb-1">
      {{ weather?.name || '...' }}
    </h2>

    <p class="text-base sm:text-lg mb-4">
      {{ descriptionsET[weather?.weather?.[0].description] || weather?.weather?.[0].description || 'Laen...' }}
    </p>


    <p class="text-3xl sm:text-4xl font-semibold">
      {{ Math.round(weather?.main?.temp) }}°C
    </p>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const weather = ref(null)
const weatherClass = ref('from-gray-400 to-gray-600')
const weatherIcon = ref('⛅')

const cities = ['Tallinn', 'Tartu', 'London', 'Tokyo', 'New York', 'Cairo', 'Reykjavík', 'Sydney']
const selectedCity = ref('Tallinn')

const fetchWeather = async () => {
  const apiKey = '801ddf6657be15f4aff7f1c0f7dc2100'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity.value}&appid=${apiKey}&units=metric&lang=et`

  const res = await fetch(url)
  const data = await res.json()
  weather.value = data

  const main = data.weather[0].main.toLowerCase()

  if (main.includes('rain')) {
    weatherClass.value = 'from-blue-500 to-indigo-700'
    weatherIcon.value = '🌧️'
  } else if (main.includes('clear')) {
    weatherClass.value = 'from-yellow-300 to-yellow-600'
    weatherIcon.value = '☀️'
  } else if (main.includes('cloud')) {
    weatherClass.value = 'from-gray-300 to-gray-600'
    weatherIcon.value = '☁️'
  } else if (main.includes('snow')) {
    weatherClass.value = 'from-blue-100 to-white'
    weatherIcon.value = '❄️'
  } else {
    weatherClass.value = 'from-green-400 to-green-700'
    weatherIcon.value = '🌡️'
  }
}

const fetchWeatherByCoords = async (lat, lon) => {
  const apiKey = '801ddf6657be15f4aff7f1c0f7dc2100'
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=et`

  const res = await fetch(url)
  const data = await res.json()
  weather.value = data
  selectedCity.value = data.name

  const main = data.weather[0].main.toLowerCase()

  if (main.includes('rain')) {
    weatherClass.value = 'from-blue-500 to-indigo-700'
    weatherIcon.value = '🌧️'
  } else if (main.includes('clear')) {
    weatherClass.value = 'from-yellow-300 to-yellow-600'
    weatherIcon.value = '☀️'
  } else if (main.includes('cloud')) {
    weatherClass.value = 'from-gray-300 to-gray-600'
    weatherIcon.value = '☁️'
  } else if (main.includes('snow')) {
    weatherClass.value = 'from-blue-100 to-white'
    weatherIcon.value = '❄️'
  } else {
    weatherClass.value = 'from-green-400 to-green-700'
    weatherIcon.value = '🌡️'
  }
}

const descriptionsET = {
  'clear sky': 'Selge taevas',
  'few clouds': 'Üksikud pilved',
  'scattered clouds': 'Hajusad pilved',
  'broken clouds': 'Katkendlikud pilved',
  'overcast clouds': 'Täielikult pilves',
  'shower rain': 'Hoovihm',
  'rain': 'Vihm',
  'light rain': 'Nõrk vihm',
  'moderate rain': 'Mõõdukas vihm',
  'thunderstorm': 'Äike',
  'snow': 'Lumi',
  'mist': 'Udu'
}


onMounted(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude
      const lon = position.coords.longitude
      await fetchWeatherByCoords(lat, lon)
    }, () => {
      fetchWeather()
    })
  } else {
    fetchWeather()
  }
})
</script>

<style scoped>
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
