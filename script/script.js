// Получаем кнопку и элемент меню
var button = document.querySelector('button');
var close = document.querySelector('#koks');
var menu = document.querySelector('.menu');

// Обработчик события клика на кнопку
button.addEventListener('mouseover', function() {
  // Генерируем случайные значения для left и top в процентах
  var left = Math.floor(Math.random() * 77) + '%';
  var top = Math.floor(Math.random() * 77) + '%';

  // Изменяем параметры класса "menu"
  menu.style.left = left;
  menu.style.top = top;
});
close.addEventListener('click', function() {
  // Генерируем случайные значения для left и top в процентах
  var left = Math.floor(Math.random() * 77) + '%';
  var top = Math.floor(Math.random() * 77) + '%';

  // Изменяем параметры класса "menu"
  menu.style.left = left;
  menu.style.top = top;
});