// Получаем ссылки на изображение и оверлей
const images = document.querySelectorAll('.zoom-img');

// Обработчик клика на изображение
images.forEach(function (image) {
  image.addEventListener('click', function (event) {
    toggleFullscreen(image); // Открываем форму
  });
});


// Обработчик клика вне изображения для закрытия полноэкранного режима
overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        closeFullscreen();
    }
});

// Функция для управления полноэкранным режимом
function toggleFullscreen(image) {
  var zoomClass = image.classList.contains("fullscreen-image"); // Без точки перед "fullscreen-image"
  if (zoomClass) {
      image.classList.remove("fullscreen-image");
      overlay.style.display = 'none'; // Скрываем оверлей
      document.body.style.overflow = 'auto'; // Разблокируем скролл на странице
  } else {
      image.classList.add("fullscreen-image");
      overlay.style.display = 'block'; // Отображаем оверлей
      document.body.style.overflow = 'hidden'; // Блокируем скролл на странице
  }
}

// Функция для закрытия полноэкранного режима
function closeFullscreen() {
    overlay.style.display = 'none'; // Скрываем оверлей
    var zoo_img = document.querySelector('.fullscreen-image');
    zoo_img.classList.remove("fullscreen-image");
}
