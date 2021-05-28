let toggle = document.querySelector('.nav-menu');
let overlay = document.querySelector('.nav-overlay')
let sugg = document.querySelector('.suggestions')
let input = document.querySelector('.input-search')


let mock = [

  {
    id: "kaguya-sama-wa-kokurasetai-tensai-tachi-no-renai-zunousen-ova-sub-espanol",
    title: "Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen OVA",
    img: "https://monoschinos2.com/image/imagen/160/224/114844.jpg",
    category: "Ova",
    year: 2021
  },

  {
    id: "poketoon-sub-espanol",
    title: "Pokétoon",
    img: "https://monoschinos2.com/image/imagen/160/224/poketoon.jpg",
    category: "Ona",
    year: 2020
  },

  {
    id: "danmachi-ova-3-sub-espanol",
    title: "Danmachi Ova 3",
    img: "https://monoschinos2.com/image/imagen/160/224/110800.jpg",
    category: "Ova",
    year: 2021
  },

  {
    id: "omoi-omoware-furi-furare-sub-espanol",
    title: "Omoi, Omoware, Furi, Furare",
    img: "https://monoschinos2.com/image/imagen/160/224/MV5BOTkxZWFkMWItNzNkZS00ZmE1LWExODYtZDYzN2U0MjVmODQ1XkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_.jpg",
    category: "Pelicula",
    year: 2020
  },

  {
    id: "mairimashita-iruma-kun-2nd-season-sub-espanol",
    title: "Mairimashita! Iruma-kun 2nd Season",
    img: "https://monoschinos2.com/image/imagen/160/224/IrumaS2_Teaser.png",
    category: "Anime",
    year: 2021
  },

  {
    id: "cestvs-the-roman-fighter-sub-espanol",
    title: "Cestvs: The Roman Fighter",
    img: "https://monoschinos2.com/image/imagen/160/224/MV5BYjBiZDY1OTAtMzA5ZC00ODdhLWFmZWYtOTg1MGJmZWEzODM5XkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg",
    category: "Anime",
    year: 2021
  },

  {
    id: "osananajimi-ga-zettai-ni-makenai-love-comedy-sub-espanol",
    title: "Osananajimi ga Zettai ni Makenai Love Comedy",
    img: "https://monoschinos2.com/image/imagen/160/224/113327.jpg",
    category: "Anime",
    year: 2021
  },

  {
    id: "fumetsu-no-anata-e-sub-espanol",
    title: "Fumetsu no Anata e",
    img: "https://monoschinos2.com/image/imagen/160/224/Fumetsu-no-Anata-e-Poster-2.jpg",
    category: "Anime",
    year: 2021
  },

  {
    id: "itazuraguma-no-gloomy-sub-espanol",
    title: "Itazuraguma no Gloomy",
    img: "https://monoschinos2.com/image/imagen/160/224/gloomyKV1.jpg",
    category: "Corto",
    year: 2021
  },

  {
    id: "blue-reflection-ray-sub-espanol",
    title: "Blue Reflection Ray",
    img: "https://monoschinos2.com/image/imagen/160/224/blue-reflection-ray.webp",
    category: "Anime",
    year: 2021
  },

  {
    id: "bishounen-tanteidan-sub-espanol",
    title: "Bishounen Tanteidan",
    img: "https://monoschinos2.com/image/imagen/160/224/bishounen-tanteidan.webp",
    category: "Anime",
    year: 2021
  },

  {
    id: "shadows-house-sub-espanol",
    title: "Shadows House",
    img: "https://monoschinos2.com/image/imagen/160/224/Shadow-House-key-725x1024.jpg",
    category: "Anime",
    year: 2021
  },

  {
    id: "86-sub-espanol",
    title: "86",
    img: "https://monoschinos2.com/image/imagen/160/224/86.webp",
    category: "Anime",
    year: 2021
  },

  {
    id: "battle-athletess-daiundoukai-restart-sub-espanol",
    title: "Battle Athletess Daiundoukai ReSTART!",
    img: "https://monoschinos2.com/image/imagen/160/224/battle-athletess-daiundoukai-restart.webp",
    category: "Anime",
    year: 2021
  },

  {
    id: "ijiranaide-nagatoro-san-sub-espanol",
    title: "Ijiranaide, Nagatoro-san",
    img: "https://monoschinos2.com/image/imagen/160/224/ijiranaide-nagatoro-san.webp",
    category: "Anime",
    year: 2021
  },

  {
    id: "tokyo-revengers-sub-espanol",
    title: "Tokyo Revengers",
    img: "https://monoschinos2.com/image/imagen/160/224/tokyo-revengers.webp",
    category: "Sin Censura",
    year: 2021
  },

  {
    id: "slime-taoshite-300-nen-shiranai-uchi-ni-level-max-ni-nattemashita-sub-espanol",
    title: "Slime Taoshite 300-nen, Shiranai Uchi ni Level Max ni Nattemashita",
    img: "https://monoschinos2.com/image/imagen/160/224/slime-taoshite-300-nen-shiranai-uchi-ni-level-max-ni-nattemashita.webp",
    category: "Anime",
    year: 2021
  },

  {
    id: "yuuki-yuuna-wa-yuusha-de-aru-churutto-sub-espanol",
    title: "Yuuki Yuuna wa Yuusha de Aru Churutto!",
    img: "https://monoschinos2.com/image/imagen/160/224/yuuki-yuuna-wa-yuusha-de-aru-churutto.webp",
    category: "Corto",
    year: 2021
  },

  {
    id: "subarashiki-kono-sekai-the-animation-the-world-ends-with-you-sub-espanol",
    title: "Subarashiki Kono Sekai The Animation (The World Ends with You)",
    img: "https://monoschinos2.com/image/imagen/160/224/subarashiki-kono-sekai-the-animation-the-world-ends-with-you.webp",
    category: "Anime",
    year: 2021
  },

  {
    id: "bakuten-sub-espanol",
    title: "Bakuten!!",
    img: "https://monoschinos2.com/image/imagen/160/224/bakuten03.jpg",
    category: "Anime",
    year: 2021
  },

  {
    id: "fairy-ranmaru-anata-no-kokoro-otasuke-shimasu-sub-espanol",
    title: "Fairy Ranmaru: Anata no Kokoro Otasuke Shimasu",
    img: "https://monoschinos2.com/image/imagen/160/224/Fairy-Ranmaru-Anata-no-Kokoro-Otasuke-Shimasu.jpg",
    category: "Anime",
    year: 2021
  },

  {
    id: "zombieland-saga-revenge-sub-espanol",
    title: "Zombieland Saga: Revenge",
    img: "https://monoschinos2.com/image/imagen/160/224/110999.jpg",
    category: "Anime",
    year: 2021
  },

  {
    id: "sd-gundam-world-heroes-sub-espanol",
    title: "SD Gundam World Heroes",
    img: "https://monoschinos2.com/image/imagen/160/224/sdgundam2021.jpg",
    category: "Ona",
    year: 2021
  },

  {
    id: "mini-dragon-sub-espanol",
    title: "Mini Dragon",
    img: "https://monoschinos2.com/image/imagen/160/224/606e30641e053.jpg",
    category: "Ona",
    year: 2021
  },

  {
    id: "isekai-maou-to-shoukan-shoujo-no-dorei-majutsu-w-sub-espanol",
    title: "Isekai Maou to Shoukan Shoujo no Dorei Majutsu Ω",
    img: "https://monoschinos2.com/image/imagen/160/224/isekai-maou-to-shoukan-shoujo-no-dorei-majutsu-w.webp",
    category: "Anime",
    year: 2021
  },

  {
    id: "super-cub-sub-espanol",
    title: "Super Cub",
    img: "https://monoschinos2.com/image/imagen/160/224/super-cub.webp",
    category: "Anime",
    year: 2021
  },

  {
    id: "seijo-no-maryoku-wa-bannou-desu-sub-espanol",
    title: "Seijo no Maryoku wa Bannou Desu",
    img: "https://monoschinos2.com/image/imagen/160/224/seijo-no-maryoku-wa-bannou-desu.webp",
    category: "Anime",
    year: 2021
  },

  {
    id: "tensura-nikki-tensei-shitara-slime-datta-ken-sub-espanol",
    title: "Tensura Nikki: Tensei shitara Slime Datta Ken",
    img: "https://monoschinos2.com/image/imagen/160/224/tensura-nikki-tensei-shitara-slime-datta-ken.webp",
    category: "Anime",
    year: 2021
  },

  {
    id: "odd-taxi-sub-espanol",
    title: "Odd Taxi",
    img: "https://monoschinos2.com/image/imagen/160/224/Se-revela-una-nueva-imagen-promocional-para-el-anime-Odd-Taxi-noticias-de-animes-estrenos-de-animes-primavera-ver-animes-online-2021.jpg",
    category: "Anime",
    year: 2021
  },

  {
    id: "hige-wo-soru-soshite-joshikousei-wo-hirou-sub-espanol",
    title: "Hige wo Soru. Soshite Joshikousei wo Hirou.",
    img: "https://monoschinos2.com/image/imagen/160/224/878787.jpg",
    category: "Anime",
    year: 2021
  }
]

toggle.addEventListener('click', () => {
  overlay.classList.toggle('active')
})

input.addEventListener('click', (e) => {
  sugg.classList.add('active')
  sugg.innerHTML = `<li>Escriba al menos 2 caracteres</li>`
})

input.addEventListener('keyup', (e) => {
  searchAnime(e)
})

function searchAnime(e) {
  let text = e.target.value
  if (text.length === 0) {
    sugg.classList.remove('active')
  } else {
    sugg.innerHTML = `<li>Escriba al menos 2 caracteres</li>`
    if (text.length >= 2) {
      sugg.classList.add('active')
      let html = '';
      let animes = mock.filter(res => res.title.toLowerCase().includes(text.toLowerCase()))
      animes.forEach(a => {
        html +=
          `<li>
          <img src="${a.img}" alt="${a.title}"/>
          <div class="data">
            <span class="sugg-title">${a.title}</span>
            <span class="sugg-year">${a.year}</span>
            <span class="sugg-type">${a.category}</span>
          </div>
        <l/i>`
      })
      sugg.innerHTML = html
    }
  }
}