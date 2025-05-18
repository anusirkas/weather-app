# Weather App 🌦 – Proovitöö Lumav Commerce praktikakohale

See projekt on loodud Nuxt 3 + Vue 3 abil. Rakendus kuvab jooksvaid ilmaandmeid Tallinna kohta kasutades OpenWeatherMap API-t. Ilma tüübi järgi muutub ka visuaalne kujundus (nt taustavärv pilvise, vihmase või päikselise ilma korral).

## 🎯 Eesmärk

- Harjutada Nuxt 3 keskkonnas arendamist
- Luua front-end lahendus, mis tarbib välis-API't
- Demonstreerida oskust kasutada AI abi (nt ChatGPT)
- Hoida head Git töövoogu (sagedased commit'id ja selged kirjeldused)

## 🚀 Kasutatavad tehnoloogiad

- [Nuxt 3](https://nuxt.com/)
- Vue 3 Composition API
- TailwindCSS (stiilide loomiseks)
- OpenWeatherMap API
- Git + GitHub

## 🛠️ Setup

- `npm install`
- `npm run dev`

## 📌 Märkus Magento 2 ja Vue Storefronti kohta

Ülesande alguses proovisin installeerida nii Magento 2 kui ka Alokai (endine Vue Storefront 2) arenduskeskkonda. Mõlemad kloonisin GitHubist (`magento2`, `vue-storefront`), kuid:

- Vue Storefront 2 käivitusprotsess jäi katki (turborepo, sharp build errorid, sõltuvuste konfliktid)
- Magento 2 install osutus samuti mahukaks ja sõltuv spetsiifilisest keskkonnast (nt Docker, PHP versioon)

Seetõttu otsustasin jätkata ilma-äpi loomisega Nuxt 3 baasil – see võimaldas demonstreerida:
- Vue/Nuxt ökosüsteemi kasutust
- välist API ühendust
- visuaali muutmist andmete põhjal
- AI abiga probleemide lahendamist
- ja GitHub töövoogu

Kui soovite, võin Vue Storefrontiga jätkata eraldi ning lisada see hiljem täiendava branchi või commitina.


🔍 Katsetasin ka dünaamilisi taustapilte (nt sunny.jpg, cloudy.jpg, rainy.jpg, default.jpg jms), aga kuna see oleks suurendanud projekti mahtu ja keerukust (nt pildi optimeerimine, laadimiskiirus, responsiivsus), otsustasin jätta selle välja. Soovi korral saan hiljem lisada eraldi branchis.
