
// Установите конкретную дату, до которой нужно отсчитывать
const targetDate = new Date('2023-10-15T23:59:59'); // Пример: конец декабря 2023 года

// Функция для обновления времени до конкретной даты
function updateCountdown() {
  const currentDate = new Date(); // Текущая дата

  // Вычисляем разницу во времени между текущей датой и целевой датой
  const timeDifference = targetDate - currentDate;

  // Вычисляем количество дней, часов и минут
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

  // Обновляем текст на странице
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
}

// Вызываем функцию обновления при загрузке страницы и устанавливаем интервал обновления
updateCountdown();
setInterval(updateCountdown, 1000); // Обновляем каждую секунду

