const MENU = {
  ru: {
    slides: [
      {
        title: 'Коктейль\nМеню',
        subtitle: 'Princess Party',
        note: '5 авторских коктейлей\nна основе джина и рома',
        footer: '· · · ✦ Пожалуйста, пейте ответственно 🌸 ✦ · · ·',
        items: [
          {
            name: 'Golden Sunrise',
            badge: 'ром',
            vibe: '«Золотой рассвет»',
            desc: 'Тропический и освежающий',
            ingredients: ['ананас', 'апельсин', 'лайм', '✨ золотые блёстки'],
          },
          {
            name: 'Princess London Mule',
            badge: 'джин',
            vibe: '«Королевский мул в розовой карете»',
            desc: 'Имбирный и игристый',
            ingredients: ['имбирное пиво', 'лайм', 'гренадин'],
          },
          {
            name: 'Lavender Gin Sour',
            badge: 'джин',
            vibe: '«Сад зачарованной феи»',
            desc: 'Нежный и цветочный',
            ingredients: ['лаванда', 'лимон', '✨ розовые блёстки'],
          },
          {
            name: 'Elderflower Gin Sour',
            badge: 'джин',
            vibe: '«Сад бузины»',
            desc: 'Лёгкий и кислый',
            ingredients: ['бузина', 'лимон', 'огурец'],
          },
          {
            name: 'Rose Gin Fizz',
            badge: 'джин',
            vibe: '«Розовый сад»',
            desc: 'Цветочный и игристый, с нотками розы',
            ingredients: ['роза', 'лимон', 'огурец', '✨ розовые блёстки'],
            fullRow: true,
          },
        ],
      },
      {
        title: 'Меню Без\nАлкоголя',
        subtitle: 'Princess Party',
        note: '5 безалкогольных напитков\nдля юных принцесс',
        footer: '· · · ✦ Приятного вечера 🌸 ✦ · · ·',
        items: [
          {
            name: 'Pink Lemonade',
            badge: 'лимонад',
            vibe: '«Розовый лимонад»',
            desc: 'Освежающий и лёгкий',
            ingredients: ['лимон', 'малина', 'мята'],
          },
          {
            name: 'Fairy Tale Punch',
            badge: 'пунш',
            vibe: '«Сказочный пунш»',
            desc: 'Тропический и сладкий',
            ingredients: ['ананас', 'апельсин', 'гренадин'],
          },
          {
            name: 'Sparkling Berry Fizz',
            badge: 'физз',
            vibe: '«Ягодный физз»',
            desc: 'Игристый и ягодный',
            ingredients: ['ягоды', 'содовая', '✨ розовые блёстки'],
          },
          {
            name: 'Cucumber Mint Cooler',
            badge: 'кулер',
            vibe: '«Огуречно-мятный кулер»',
            desc: 'Прохладный и бодрящий',
            ingredients: ['огурец', 'мята', 'лайм'],
          },
          {
            name: 'Golden Peach Fizz',
            badge: 'фреш',
            vibe: '«Персиковый рассвет»',
            desc: 'Мягкий и фруктовый',
            ingredients: ['персик', 'апельсин', '✨ золотые блёстки'],
            fullRow: true,
          },
        ],
      },
    ],
  },
  en: {
    slides: [
      {
        title: 'Cocktail\nMenu',
        subtitle: 'Princess Party',
        note: '5 signature cocktails\nbased on gin and rum',
        footer: '· · · ✦ Please drink responsibly 🌸 ✦ · · ·',
        items: [
          {
            name: 'Golden Sunrise',
            badge: 'rum',
            vibe: '"Golden Sunrise"',
            desc: 'Tropical and refreshing',
            ingredients: ['pineapple', 'orange', 'lime', '✨ gold glitter'],
          },
          {
            name: 'Princess London Mule',
            badge: 'gin',
            vibe: '"Royal mule in a pink carriage"',
            desc: 'Ginger and sparkling',
            ingredients: ['ginger beer', 'lime', 'grenadine'],
          },
          {
            name: 'Lavender Gin Sour',
            badge: 'gin',
            vibe: '"Enchanted fairy garden"',
            desc: 'Delicate and floral',
            ingredients: ['lavender', 'lemon', '✨ pink glitter'],
          },
          {
            name: 'Elderflower Gin Sour',
            badge: 'gin',
            vibe: '"Elderflower garden"',
            desc: 'Light and tart',
            ingredients: ['elderflower', 'lemon', 'cucumber'],
          },
          {
            name: 'Rose Gin Fizz',
            badge: 'gin',
            vibe: '"Rose garden"',
            desc: 'Floral and sparkling, with notes of rose',
            ingredients: ['rose', 'lemon', 'cucumber', '✨ pink glitter'],
            fullRow: true,
          },
        ],
      },
      {
        title: 'Non-Alcoholic\nMenu',
        subtitle: 'Princess Party',
        note: '5 non-alcoholic drinks\nfor young princesses',
        footer: '· · · ✦ Enjoy the evening 🌸 ✦ · · ·',
        items: [
          {
            name: 'Pink Lemonade',
            badge: 'lemonade',
            vibe: '"Pink Lemonade"',
            desc: 'Refreshing and light',
            ingredients: ['lemon', 'raspberry', 'mint'],
          },
          {
            name: 'Fairy Tale Punch',
            badge: 'punch',
            vibe: '"Fairy Tale Punch"',
            desc: 'Tropical and sweet',
            ingredients: ['pineapple', 'orange', 'grenadine'],
          },
          {
            name: 'Sparkling Berry Fizz',
            badge: 'fizz',
            vibe: '"Berry Fizz"',
            desc: 'Sparkling and berry-forward',
            ingredients: ['berries', 'soda', '✨ pink glitter'],
          },
          {
            name: 'Cucumber Mint Cooler',
            badge: 'cooler',
            vibe: '"Cucumber Mint Cooler"',
            desc: 'Cool and invigorating',
            ingredients: ['cucumber', 'mint', 'lime'],
          },
          {
            name: 'Golden Peach Fizz',
            badge: 'fresh',
            vibe: '"Peach Sunrise"',
            desc: 'Soft and fruity',
            ingredients: ['peach', 'orange', '✨ gold glitter'],
            fullRow: true,
          },
        ],
      },
    ],
  },
};

const state = {
  lang: localStorage.getItem('menuLang') || 'ru',
  slideIndex: 0,
};

const slideEls = Array.from(document.querySelectorAll('.slide'));
const dotsContainer = document.getElementById('nav-dots');
const langToggle = document.getElementById('lang-toggle');

function renderSlide(slideEl, slideData) {
  slideEl.querySelector('[data-title]').textContent = slideData.title;
  slideEl.querySelector('[data-subtitle]').textContent = slideData.subtitle;
  slideEl.querySelector('[data-note]').textContent = slideData.note;
  slideEl.querySelector('[data-footer]').textContent = slideData.footer;

  const grid = slideEl.querySelector('[data-grid]');
  grid.innerHTML = '';

  slideData.items.forEach((item) => {
    const el = document.createElement('div');
    el.className = 'cocktail-item' + (item.fullRow ? ' full-row' : '');

    const top = document.createElement('div');
    top.className = 'cocktail-top';

    const name = document.createElement('span');
    name.className = 'cocktail-name';
    name.textContent = item.name;

    const badge = document.createElement('span');
    badge.className = 'base-badge';
    badge.textContent = item.badge;

    top.appendChild(name);
    top.appendChild(badge);

    const vibe = document.createElement('div');
    vibe.className = 'cocktail-vibe';
    vibe.textContent = item.vibe;

    const desc = document.createElement('div');
    desc.className = 'cocktail-desc';
    desc.textContent = item.desc;

    const ingRow = document.createElement('div');
    ingRow.className = 'ing-row';
    item.ingredients.forEach((ing) => {
      const tag = document.createElement('span');
      tag.className = 'ing-tag';
      tag.textContent = ing;
      ingRow.appendChild(tag);
    });

    el.appendChild(top);
    el.appendChild(vibe);
    el.appendChild(desc);
    el.appendChild(ingRow);
    grid.appendChild(el);
  });
}

function render() {
  const data = MENU[state.lang];
  document.documentElement.lang = state.lang;
  slideEls.forEach((slideEl, i) => renderSlide(slideEl, data.slides[i]));
}

function buildDots() {
  dotsContainer.innerHTML = '';
  slideEls.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'nav-dot';
    dot.setAttribute('aria-label', `Slide ${i + 1}`);
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });
}

function updateSlideVisibility() {
  slideEls.forEach((slideEl, i) => {
    slideEl.classList.toggle('active', i === state.slideIndex);
  });
  Array.from(dotsContainer.children).forEach((dot, i) => {
    dot.classList.toggle('active', i === state.slideIndex);
  });
}

function goToSlide(index) {
  state.slideIndex = (index + slideEls.length) % slideEls.length;
  updateSlideVisibility();
}

langToggle.addEventListener('click', () => {
  state.lang = state.lang === 'ru' ? 'en' : 'ru';
  localStorage.setItem('menuLang', state.lang);
  render();
});

document.getElementById('prev-slide').addEventListener('click', () => goToSlide(state.slideIndex - 1));
document.getElementById('next-slide').addEventListener('click', () => goToSlide(state.slideIndex + 1));

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') goToSlide(state.slideIndex + 1);
  if (e.key === 'ArrowLeft') goToSlide(state.slideIndex - 1);
});

let touchStartX = null;
const slidesContainer = document.getElementById('slides');
slidesContainer.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].clientX;
}, { passive: true });

slidesContainer.addEventListener('touchend', (e) => {
  if (touchStartX === null) return;
  const deltaX = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(deltaX) > 50) {
    goToSlide(state.slideIndex + (deltaX < 0 ? 1 : -1));
  }
  touchStartX = null;
});

render();
buildDots();
updateSlideVisibility();
