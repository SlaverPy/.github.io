// // Находим форму, оверлей и кнопки с классом "form-trigger"
// const contactForm = document.getElementById('contactForm');
// const overlay = document.getElementById('overlay');
// const formTriggerButtons = document.querySelectorAll('.form-trigger');

// // Функция для открытия формы
// function openForm() {
//   contactForm.classList.remove('hidden'); // Удаляем класс "hidden" с формы
//   overlay.style.display = 'block'; // Отображаем оверлей
//   document.body.style.overflow = 'hidden'; // Блокируем скролл на странице
// }

// // Функция для закрытия формы
// function closeForm() {
//   contactForm.classList.add('hidden'); // Добавляем класс "hidden" к форме
//   overlay.style.display = 'none'; // Скрываем оверлей
//   document.body.style.overflow = 'auto'; // Разблокируем скролл на странице
// }

// // Добавляем обработчик события для каждой кнопки
// formTriggerButtons.forEach(function (button) {
//   button.addEventListener('click', function (event) {
//     event.preventDefault(); // Предотвращаем переход по ссылке
//     openForm(); // Открываем форму
//   });
// });

// // Добавляем обработчик события для кнопки "Отправить" в форме
// const submitButton = contactForm.querySelector('button[type="submit"]');
// submitButton.addEventListener('click', function (event) {
//   event.preventDefault(); // Предотвращаем отправку формы
//   closeForm(); // Закрываем форму после отправки
// });

// // Добавляем обработчик события для оверлея
// overlay.addEventListener('click', function (event) {
//   if (event.target === overlay) {
//     closeForm(); // Закрываем форму при клике на оверлей
//   }
// });
// Находим форму, оверлей, кнопки с классом "form-trigger" и поле ввода телефона
const contactForm = document.getElementById('contactForm');
const overlay = document.getElementById('overlay');
const formTriggerButtons = document.querySelectorAll('.form-trigger');
const phoneInput = document.getElementById('phone');
const phoneError = document.getElementById('phoneError');

// Регулярное выражение для проверки формата телефонного номера (пример для России)
const phoneRegex = /^\+7\d{10}$/;

// Функция для валидации телефонного номера
function validatePhone() {
  const phoneNumber = phoneInput.value.replace(/[\s\-]/g, ''); // Удаляем пробелы и дефисы из введенного номера
  console.log(phoneNumber)
  if (phoneRegex.test(phoneNumber)) {
    phoneError.textContent = ''; // Очищаем сообщение об ошибке, если номер верный
    console.log("верный")
    return true; // Номер верный
  } else {
    phoneError.textContent = 'Введите номер в формате: +7 (123) 456-78-90'; // Выводим сообщение об ошибке
    console.log("не верный")
    return false; // Номер неверный
  }
}

// Функция для открытия формы
function openForm() {
  contactForm.classList.remove('hidden'); // Удаляем класс "hidden" с формы
  overlay.style.display = 'block'; // Отображаем оверлей
  document.body.style.overflow = 'hidden'; // Блокируем скролл на странице
}

// Функция для закрытия формы
function closeForm() {
  contactForm.classList.add('hidden'); // Добавляем класс "hidden" к форме
  overlay.style.display = 'none'; // Скрываем оверлей
  document.body.style.overflow = 'auto'; // Разблокируем скролл на странице
}

// Добавляем обработчик события для каждой кнопки
formTriggerButtons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    openForm(); // Открываем форму
  });
});

// Добавляем обработчик события для кнопки "Отправить" в форме
const submitButton = contactForm.querySelector('button[type="submit"]');
submitButton.addEventListener('click', function (event) {
  event.preventDefault(); // Предотвращаем отправку формы
  if (validatePhone()) {
    // Если номер верный, закрываем форму
    closeForm();
  }
});

// Добавляем обработчик события для оверлея
overlay.addEventListener('click', function (event) {
  if (event.target === overlay) {
    closeForm(); // Закрываем форму при клике на оверлей
  }
});
