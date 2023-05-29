// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

document.addEventListener("DOMContentLoaded", function (e) {
  console.log("все теги прогрузились");
});

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

window.addEventListener("load", function (e) {
  console.log("страница загрузилась");
});

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

document.addEventListener("click", (event) => {
  const containStr = event.target.classList.contains("super_element")
    ? "присутствует"
    : "отсутствует";
  console.log(`
    Класс "super_element" ${containStr} в элементе 
    "${event.target.tagName.toLowerCase()}".`);
});

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

const textAreaItem = document.querySelector("textarea");
textAreaItem.addEventListener("mouseover", function (e) {
  console.log("Вы навели на textarea!");
});

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

const listItms = document.querySelector("ul");
listItms.addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName.toLowerCase() === "button") {
    console.log(target.textContent);
  }
});

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.
// Ответ:
// Так происходит из-за упорядоченнргр списка текущих целей события, через которое оно проходит. Последний элемент в списке - это цель события. предыдущие элементы - это предки (ancestors), а напрямую предшевствующий элемент - родитель (parent)

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

const listElements = document.querySelectorAll("li:nth-child(even)");
for (let i = 0; i < listElements.length; i++) {
  listElements[i].style.backgroundColor = "grey";
}
