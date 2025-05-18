# Weather App 🌦 – Proovitöö Lumav Commerce praktikakohale

See projekt on loodud **Nuxt 3 + Vue 3** abil. Rakendus kuvab jooksvaid ilmaandmeid Tallinna kohta kasutades **OpenWeatherMap API-t**. Ilma tüübi järgi muutub ka **visuaalne kujundus** (nt taustavärv pilvise, vihmase või päikselise ilma korral).

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

```bash
npm install
npm run dev

🧪 Tehtud funktsionaalsus
✅ Dropdown linnade valikuga (Tallinn, Tartu, London jne)

✅ Ilma põhine visuaalne muutus (nt ☀️ 🌧️ ❄️)

✅ Automaatselt kasutaja asukoha tuvastus (Geolocation API)

✅ Disain: klaasiefekt + gradient-taustad + animatsioonid

✅ Responsiivne (mobile-first)

📌 Magento 2 ja Vue Storefront
Ülesande alguses proovisin installeerida nii Magento 2 kui ka Alokai (endine Vue Storefront 2) arenduskeskkonda. Mõlemad kloonisin GitHubist (magento2, vue-storefront), kuid:

Vue Storefront 2 käivitusprotsess jäi katki (turborepo, sharp build errorid, sõltuvuste konfliktid)

Magento 2 install osutus samuti mahukaks ja sõltuv spetsiifilisest keskkonnast (nt Docker, PHP versioon)

➡️ Seetõttu otsustasin jätkata ilmaäpi loomisega Nuxt 3 baasil – see võimaldas demonstreerida:

Vue/Nuxt ökosüsteemi kasutust

välise API ühendust

visuaali muutmist andmete põhjal

AI abiga probleemide lahendamist

ja GitHub töövoogu

✳️ Soovi korral võin Vue Storefrontiga jätkata eraldi branchis või hilisemas commitis.

🎨 Visuaalsed katsetused
Katsetasin ka dünaamilisi taustapilte (nt sunny.jpg, cloudy.jpg, rainy.jpg), kuid jätsin need välja, et:

hoida projekti kergena ja kiirelt laaditavana

vältida pildimahu suurenemist ja lisakompleksust

🧠 Refleksioon & ajakulu
Kogu töö tegemine koos katsetamisega (Magento, Vue Storefront, disainid, visuaalid, taustapildid) võttis u 5 tundi.
Töö oleks olnud tehtav ka ~3h-ga, kuid võtsin teadlikult aega, et:

õppida uusi tööriistu (nt Nuxt 3 + Tailwind koos)

katsetada disainivõtteid

hoida töö jagatuna, korrastatuna ja dokumenteerituna GitHubis

🔮 Võimalikud järgmised sammud
Vue Storefront + Magento integreerimine (eraldi branchis)

Weather API error handling ja fallback-id

UI polish (hoverid, ikoonid, animatsioonid)

PWA tugi (Add to Home Screen)

Tume/hele režiimi automaatne tugi

👉 Live demo: weather-app-flame-one.vercel.app
👉 GitHub repo: github.com/anusirkas/weather-app