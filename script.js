let button = document.getElementById('nav');
let menu = document.getElementById('menu');

// Обрабатываем событие клика на элементе:
button.addEventListener('click', () => {
    menu.classList.toggle('leftBar')
    menu.classList.toggle('menu__enable')
  })
  