
(function () {
  const fixed = document.querySelector('.fixed');
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      fixed.classList.add('fixed__active');
    } else {
      fixed.classList.remove('fixed__active');
    }
  };
}());
// Burger menu

(function () {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.header__nav');
  const menuCloseItem = document.querySelector('.header__nav-close');
  const links = document.querySelectorAll('.header__item');
  burgerItem.addEventListener('click', () => {
    menu.classList.add('header__nav-active');
  });
  menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('header__nav-active');
  });
  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('header__nav-active');
    });
  });

}());


console.log(`
* 1.вёрстка валидная: +10
* 2.вёрстка семантическая: +20 :
      footer:  1
      header:  1
      main:  1
      nav:1
      section:  7
      h1:  1
      h2:  7
      h4:  1
* 3.для оформления СV используются css-стили: +10
* 4.контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы: +10
* 5.вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется: +10
* 6.есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным: +10
* 7.на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым): +10
* 8.контакты для связи и перечень навыков оформлены в виде списка ul > li: +10
* 9.CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского: +10
* 10.CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода: +10 
* 11.CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. +10
* 12.CV выполнено на английском языке +10
* 13.выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) +10
* 14 дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию  +10

общий балл: 150
`);