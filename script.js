const MENU = {
  ru: {
    slides: [
      {
        title: 'Коктейль\nМеню',
        subtitle: 'Prince & Princess Menu',
        note: 'Для юных принцев и принцесс',
        footer: '· · · ✦ Пожалуйста, пейте ответственно 🌸 ✦ · · ·',
        items: [
          {
            emoji: '🍍',
            name: 'Золотой рассвет',
            base: 'ром',
            desc: 'Тропический и освежающий',
            ingredients: ['Ром', 'Ананас', 'Апельсин', 'Лайм', 'Лёд', '✨ золотые блёстки'],
            joke: '😄 Исчезает быстрее, чем тыква превращается в карету',
          },
          {
            emoji: '👑',
            name: 'Королевский мул в розовой карете',
            base: 'джин',
            desc: 'Имбирный и игристый',
            ingredients: ['Джин', 'Ginger Beer', 'Лайм', 'Гренадин', 'Лёд'],
            note: 'Гренадин — последним, не мешать!',
            joke: '😄 Лягается не хуже настоящего мула',
          },
          {
            emoji: '🦋',
            name: 'Сад зачарованной феи',
            base: 'джин',
            desc: 'Лавандовый и нежный',
            ingredients: ['Джин', 'Лимон', 'Лавандовый сироп', 'Газировка', 'Лёд', '✨ розовые блёстки'],
            joke: '😄 Осторожно: превращает в фею с первого глотка',
          },
          {
            emoji: '🌿',
            name: 'Цветение бузины',
            base: 'джин',
            desc: 'Лёгкий и кислый',
            ingredients: ['Джин', 'Elderflower сироп', 'Лимон', 'Газировка', 'Огурец', 'Лёд'],
            joke: '😄 Даже фея-крёстная попросила бы добавки',
          },
          {
            emoji: '🌹',
            name: 'Розовый вальс',
            base: 'джин',
            desc: 'Цветочный и игристый',
            ingredients: ['Джин', 'Розовый сироп', 'Лимон', 'Газировка', 'Огурец', 'Лёд', '✨ розовые блёстки'],
            joke: '😄 Роза без шипов, но с характером',
          },
        ],
      },
      {
        title: 'Меню Без\nАлкоголя',
        subtitle: 'Prince & Princess Menu',
        note: 'Для юных принцев и принцесс',
        footer: '· · · ✦ Приятного вечера 🌸 ✦ · · ·',
        items: [
          {
            emoji: '🍺',
            name: 'Золотой хмель',
            base: 'пиво 0.0%',
            desc: 'Лёгкий и хмельной',
            ingredients: ['Безалкогольное пиво'],
            joke: '😄 Пьёшь как король, за рулём как трезвенник',
          },
          {
            emoji: '🥤',
            name: 'Кола Zero с лимоном',
            base: 'кола',
            desc: 'Освежающий и бодрящий',
            ingredients: ['Кола Zero', 'Лимон (по желанию)', 'Лёд'],
            joke: '😄 Ноль калорий, сто процентов настроения',
          },
          {
            emoji: '🫚',
            name: 'Имбирная искра',
            base: 'имбирное пиво',
            desc: 'Острый и игристый',
            ingredients: ['Имбирное пиво', 'Лёд'],
            joke: '😄 Огонь без градусов',
          },
          {
            emoji: '💧',
            name: 'Вода со свежим огурцом',
            base: 'вода',
            desc: 'Прохладная и лёгкая',
            ingredients: ['Вода', 'Огурец', 'Лёд'],
            joke: '😄 Самый скромный напиток в этом меню',
          },
        ],
      },
    ],
  },
  en: {
    slides: [
      {
        title: 'Cocktail\nMenu',
        subtitle: 'Prince & Princess Menu',
        note: 'For young princes and princesses',
        footer: '· · · ✦ Please drink responsibly 🌸 ✦ · · ·',
        items: [
          {
            emoji: '🍍',
            name: 'Golden Sunrise',
            base: 'rum',
            desc: 'Tropical and refreshing',
            ingredients: ['Rum', 'Pineapple', 'Orange', 'Lime', 'Ice', '✨ gold glitter'],
            joke: '😄 Disappears faster than a pumpkin turns into a carriage',
          },
          {
            emoji: '👑',
            name: 'Princess London Mule',
            base: 'gin',
            desc: 'Ginger and sparkling',
            ingredients: ['Gin', 'Ginger Beer', 'Lime', 'Grenadine', 'Ice'],
            note: 'Add grenadine last, don’t stir!',
            joke: '😄 Kicks like a real mule',
          },
          {
            emoji: '🦋',
            name: 'Lavender Gin Sour',
            base: 'gin',
            desc: 'Lavender and delicate',
            ingredients: ['Gin', 'Lemon', 'Lavender syrup', 'Soda', 'Ice', '✨ pink glitter'],
            joke: '😄 Warning: turns you into a fairy after one sip',
          },
          {
            emoji: '🌿',
            name: 'Elderflower Gin Sour',
            base: 'gin',
            desc: 'Light and tart',
            ingredients: ['Gin', 'Elderflower syrup', 'Lemon', 'Soda', 'Cucumber', 'Ice'],
            joke: '😄 Even a fairy godmother would ask for seconds',
          },
          {
            emoji: '🌹',
            name: 'Rose Gin Fizz',
            base: 'gin',
            desc: 'Floral and sparkling',
            ingredients: ['Gin', 'Rose syrup', 'Lemon', 'Soda', 'Cucumber', 'Ice', '✨ pink glitter'],
            joke: '😄 A rose with no thorns, but plenty of attitude',
          },
        ],
      },
      {
        title: 'Non-Alcoholic\nMenu',
        subtitle: 'Prince & Princess Menu',
        note: 'For young princes and princesses',
        footer: '· · · ✦ Enjoy the evening 🌸 ✦ · · ·',
        items: [
          {
            emoji: '🍺',
            name: 'Golden Hops',
            base: 'beer 0.0%',
            desc: 'Light and malty',
            ingredients: ['Non-alcoholic beer'],
            joke: '😄 Drink like royalty, drive like a designated driver',
          },
          {
            emoji: '🥤',
            name: 'Cola Zero with Lemon',
            base: 'cola',
            desc: 'Refreshing and zesty',
            ingredients: ['Cola Zero', 'Lemon (optional)', 'Ice'],
            joke: '😄 Zero calories, one hundred percent mood',
          },
          {
            emoji: '🫚',
            name: 'Ginger Spark',
            base: 'ginger beer',
            desc: 'Spicy and sparkling',
            ingredients: ['Ginger beer', 'Ice'],
            joke: '😄 All the fire, none of the degrees',
          },
          {
            emoji: '💧',
            name: 'Water with Fresh Cucumber',
            base: 'water',
            desc: 'Cool and light',
            ingredients: ['Water', 'Cucumber', 'Ice'],
            joke: '😄 The most humble drink on this menu',
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
    row.className = 'drink-row';

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

    if (item.joke) {
      const joke = document.createElement('div');
      joke.className = 'drink-joke';
      joke.textContent = item.joke;
      row.appendChild(joke);
    }

    table.appendChild(row);
  });

  if (slideData.items.length % 2 !== 0) {
    const spacer = document.createElement('div');
    spacer.className = 'drink-row drink-spacer';
    table.appendChild(spacer);
  }
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
