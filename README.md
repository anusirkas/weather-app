# Weather App 🌦 – Proovitöö Lumav Commerce praktikakohale

See projekt on loodud **Nuxt 3 + Vue 3** abil. Rakendus kuvab jooksvaid ilmaandmeid Tallinna kohta kasutades **OpenWeatherMap API-t**. Ilma tüübi järgi muutub ka **visuaalne kujundus** (nt taustavärv pilvise, vihmase või päikselise ilma korral).

## 🎯 Eesmärk

- Harjutada Nuxt 3 keskkonnas arendamist  
- Luua front-end lahendus, mis tarbib välis-API't  
- Demonstreerida oskust kasutada AI abi (nt ChatGPT)  
- Hoida head Git töövoogu (sagedased commit'id ja selged kirjeldused)

## 🚀 Kasutatud tehnoloogiad

- [Nuxt 3](https://nuxt.com/)  
- Vue 3 Composition API  
- TailwindCSS  
- OpenWeatherMap API  
- Git + GitHub

## ⚙️ Paigaldus ja käivitamine

```bash
npm install
npm run dev
```

## ✅ Tehtud funktsionaalsus

- ✅ Dropdown linnade valikuga (Tallinn, Tartu, London jne)  
- ✅ Ilmapõhine visuaalne muutus (nt ☀️ 🌧️ ❄️)  
- ✅ Kasutaja asukoha automaatne tuvastus (Geolocation API)  
- ✅ Disain: klaasiefekt, gradient-taustad, animatsioonid  
- ✅ Responsiivne mobiilivaade (mobile-first)

## 🧪 Katsetused & disain

Katsetasin ka **dünaamilisi taustapilte** (nt `sunny.jpg`, `cloudy.jpg`, `rainy.jpg`), kuid jätsin need projektist välja, et:

- hoida projekt kergena ja kiirelt laaditavana  
- vältida pildimahu suurenemist ja lisakompleksust

## 🧱 Märkus: Magento 2 + Vue Storefront

Ülesande alguses proovisin installeerida nii Magento 2 kui ka Vue Storefront 2 (Alokai). Mõlemad kloonisin GitHubist (`magento2`, `vue-storefront`), kuid:

- ❌ Vue Storefront 2 ei käivitunud turborepo/sharp errorite tõttu  
- ❌ Magento 2 nõudis Dockerit ja PHP-spetsiifikat

➡️ Seetõttu keskendusin Nuxt 3 põhisele ilmaäpile, et näidata:

- Vue/Nuxt oskusi  
- Välist API ühendust  
- Visuaalseid dünaamilisi muutusi  
- AI abiga probleemide lahendamist  
- GitHub commit-töövoogu

✳️ Soovi korral võin Vue Storefrontiga jätkata eraldi branchis.

## 🧠 Refleksioon ja ajakulu

- Töö kokku kestis u **5 tundi**, millest ~2h kulus katsetustele ja harjumisele  
- Projekt oleks olnud tehtav ka ~3h-ga, kuid võtsin teadlikult rohkem aega, et:
  - õppida uusi tööriistu (Nuxt 3 + Tailwind)  
  - katsetada disainivõtteid  
  - hoida töö korrastatuna ja dokumenteerituna

## 🔮 Tulevased täiustused

- Magento + Vue Storefront integreerimine (eraldi branchis)  
- API error handling ja fallback-id  
- UI polish (hoverid, ikoonid, animatsioonid)  
- PWA tugi („Add to Home Screen”)  
- Tume/hele režiimi automaatne tugi

---

## 🔗 Lingid

- 👉 **Live demo**: [weather-app-flame-one.vercel.app](https://weather-app-flame-one.vercel.app)  
- 👉 **GitHub repo**: [github.com/anusirkas/weather-app](https://github.com/anusirkas/weather-app)
