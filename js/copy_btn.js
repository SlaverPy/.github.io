const copyButtons = document.querySelectorAll(".promocode__btn");

// Функция для копирования текста в буфер обмена
function copyTextToClipboard(text) {
  const tempInput = document.createElement("input");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

// Добавляем обработчик клика для каждой кнопки
copyButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Получаем текст промокода из кнопки
    const promoCode = button.innerText.trim();

    // Копируем текст в буфер обмена
    copyTextToClipboard(promoCode);

    // Опционально: Информируем пользователя, что промокод скопирован
    alert("Промокод скопирован в буфер обмена: " + promoCode);
  });
});
