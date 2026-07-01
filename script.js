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
            emoji: '🍍',
            name: 'Золотой рассвет',
            base: 'ром',
            desc: 'Тропический и освежающий',
            ingredients: ['Ром 30 мл', 'Ананас 160 мл', 'Апельсин 80 мл', 'Лайм 10 мл', 'Лёд', '✨ золотые блёстки'],
          },
          {
            emoji: '👑',
            name: 'Королевский мул в розовой карете',
            base: 'джин',
            desc: 'Имбирный и игристый',
            ingredients: ['Джин 30 мл', 'Ginger Beer 160 мл', 'Лайм 20 мл', 'Гренадин 15 мл', 'Лёд'],
            note: 'Гренадин — последним, не мешать!',
          },
          {
            emoji: '🦋',
            name: 'Сад зачарованной феи',
            base: 'джин',
            desc: 'Лавандовый и нежный',
            ingredients: ['Джин 20 мл', 'Лимон 15 мл', 'Лавандовый сироп 40 мл', 'Газировка 100 мл', 'Лёд', '✨ розовые блёстки'],
          },
          {
            emoji: '🌿',
            name: 'Сад бузины',
            base: 'джин',
            desc: 'Лёгкий и кислый',
            ingredients: ['Джин 30 мл', 'Elderflower сироп 40 мл', 'Лимон 30 мл', 'Газировка 160 мл', 'Огурец', 'Лёд'],
          },
          {
            emoji: '🌹',
            name: 'Розовый сад',
            base: 'джин',
            desc: 'Цветочный и игристый',
            ingredients: ['Джин 30 мл', 'Розовый сироп 20 мл', 'Лимон 25 мл', 'Газировка 150 мл', 'Огурец', 'Лёд', '✨ розовые блёстки'],
            fullRow: true,
          },
        ],
      },
      {
        title: 'Меню Без\nАлкоголя',
        subtitle: 'Princess Party',
        note: '4 напитка без алкоголя\nдля юных принцесс',
        footer: '· · · ✦ Приятного вечера 🌸 ✦ · · ·',
        items: [
          {
            emoji: '🍺',
            name: 'Золотой хмель',
            base: 'пиво 0.0%',
            desc: 'Лёгкий и хмельной',
            ingredients: ['Безалкогольное пиво 330 мл', 'Лёд'],
          },
          {
            emoji: '🥤',
            name: 'Кола Zero с лимоном',
            base: 'кола',
            desc: 'Освежающий и бодрящий',
            ingredients: ['Кола Zero 330 мл', 'Лимон', 'Лёд'],
          },
          {
            emoji: '🫚',
            name: 'Имбирная искра',
            base: 'имбирное пиво',
            desc: 'Острый и игристый',
            ingredients: ['Имбирное пиво 330 мл', 'Лёд'],
          },
          {
            emoji: '💧',
            name: 'Вода со свежим огурцом',
            base: 'вода',
            desc: 'Прохладная и лёгкая',
            ingredients: ['Вода 330 мл', 'Огурец', 'Лёд'],
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
            emoji: '🍍',
            name: 'Golden Sunrise',
            base: 'rum',
            desc: 'Tropical and refreshing',
            ingredients: ['Rum 30 ml', 'Pineapple 160 ml', 'Orange 80 ml', 'Lime 10 ml', 'Ice', '✨ gold glitter'],
          },
          {
            emoji: '👑',
            name: 'Princess London Mule',
            base: 'gin',
            desc: 'Ginger and sparkling',
            ingredients: ['Gin 30 ml', 'Ginger Beer 160 ml', 'Lime 20 ml', 'Grenadine 15 ml', 'Ice'],
            note: 'Add grenadine last, don’t stir!',
          },
          {
            emoji: '🦋',
            name: 'Lavender Gin Sour',
            base: 'gin',
            desc: 'Lavender and delicate',
            ingredients: ['Gin 20 ml', 'Lemon 15 ml', 'Lavender syrup 40 ml', 'Soda 100 ml', 'Ice', '✨ pink glitter'],
          },
          {
            emoji: '🌿',
            name: 'Elderflower Gin Sour',
            base: 'gin',
            desc: 'Light and tart',
            ingredients: ['Gin 30 ml', 'Elderflower syrup 40 ml', 'Lemon 30 ml', 'Soda 160 ml', 'Cucumber', 'Ice'],
          },
          {
            emoji: '🌹',
            name: 'Rose Gin Fizz',
            base: 'gin',
            desc: 'Floral and sparkling',
            ingredients: ['Gin 30 ml', 'Rose syrup 20 ml', 'Lemon 25 ml', 'Soda 150 ml', 'Cucumber', 'Ice', '✨ pink glitter'],
            fullRow: true,
          },
        ],
      },
      {
        title: 'Non-Alcoholic\nMenu',
        subtitle: 'Princess Party',
        note: '4 non-alcoholic drinks\nfor young princesses',
        footer: '· · · ✦ Enjoy the evening 🌸 ✦ · · ·',
        items: [
          {
            emoji: '🍺',
            name: 'Golden Hops',
            base: 'beer 0.0%',
            desc: 'Light and malty',
            ingredients: ['Non-alcoholic beer 330 ml', 'Ice'],
          },
          {
            emoji: '🥤',
            name: 'Cola Zero with Lemon',
            base: 'cola',
            desc: 'Refreshing and zesty',
            ingredients: ['Cola Zero 330 ml', 'Lemon', 'Ice'],
          },
          {
            emoji: '🫚',
            name: 'Ginger Spark',
            base: 'ginger beer',
            desc: 'Spicy and sparkling',
            ingredients: ['Ginger beer 330 ml', 'Ice'],
          },
          {
            emoji: '💧',
            name: 'Water with Fresh Cucumber',
            base: 'water',
            desc: 'Cool and light',
            ingredients: ['Water 330 ml', 'Cucumber', 'Ice'],
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

  const table = slideEl.querySelector('[data-grid]');
  table.innerHTML = '';

  slideData.items.forEach((item) => {
    const row = document.createElement('div');
    row.className = 'drink-row' + (item.fullRow ? ' full-row' : '');

    const head = document.createElement('div');
    head.className = 'drink-head';

    const name = document.createElement('span');
    name.className = 'drink-name';
    name.textContent = `${item.emoji} ${item.name}`;

    const baseBadge = document.createElement('span');
    baseBadge.className = 'base-badge';
    baseBadge.textContent = item.base;

    head.appendChild(name);
    head.appendChild(baseBadge);

    const desc = document.createElement('div');
    desc.className = 'drink-desc';
    desc.textContent = item.desc;

    const ingRow = document.createElement('div');
    ingRow.className = 'ing-row';
    item.ingredients.forEach((ing) => {
      const tag = document.createElement('span');
      tag.className = 'ing-tag';
      tag.textContent = ing;
      ingRow.appendChild(tag);
    });

    row.appendChild(head);
    row.appendChild(desc);
    row.appendChild(ingRow);

    if (item.note) {
      const note = document.createElement('div');
      note.className = 'drink-note';
      note.textContent = item.note;
      row.appendChild(note);
    }

    table.appendChild(row);
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
