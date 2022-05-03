let arr = [
  "Gradually",
  "Постепенно",
  "However",
  "Однако",
  "During",
  "Во время",
  "To solve",
  "Чтобы решать",
  "Involving",
  "Включая",
  "Advanced",
  "Продвинуты",
  "Definite",
  "Определенный",
  "Became",
  "Стали",
  "Generalised",
  "Обобщенными",
  "Began",
  "Начали",
  "Difficult",
  "Сложные",
  "Even though",
  "Хотя",
  "Certain",
  "Определенный",
  "Existed",
  "Существовали",
  "Earlier",
  "ранний",
  "Significant",
  "значительный",
  "Contributions",
  "вклады",
  "Occurred",
  "повлиять",
  "Later ",
  "позже",
  "Among",
  "среди",
  "Stated",
  "сформулировал",
  "Deduced",
  "выведены",
  "Determine",
  "образуют ",
  "Extended",
  "протяженный",
  "Is determined",
  "определяется",
  "Distance",
  "расстояние",
  "Equal",
  "равны",
  "To one another",
  "Друг другу",
  "Intersecting",
  "пересекающий",
  "Interior",
  "внутренний",
  "Same",
  "Тот же",
  "Less than",
  "Менее чем",
  "Will intersect ",
  "пересекут",
  "Each other",
  "Друг друга",
  "Also",
  "также",
  "With the decline ",
  "С упадком",
  "Filed ",
  "поле",
  "Until",
  "до",
  "Such us",
  "Таких как",
  "Timekeeping ",
  "Измерение времени",
  "Eventually",
  "В итоге",
  "Development ",
  "развитие",
  "Once again",
  "вновь",
  "To take an interest",
  "Проявлять интерес",
  "Had been forgotten about ",
  "Были забыты",
  "Possible ",
  "возможные",
  "Influenced",
  "повлияла",
  "Researchers",
  "исследователи ",
  "Including",
  "включая",
];
let engilshArr = [];
let russianArr = [];

const english = document.querySelector(".english");
const russian = document.querySelector(".russian");
const russianWord = document.querySelector(".russian_word");
const englishWord = document.querySelector(".engish_word");
const openBtn = document.getElementById("open");
const nextBtn = document.getElementById("next");

arr.forEach((el, ind) => {
  if (ind == 0 || ind % 2 == 0) {
    engilshArr.push(el.toLocaleLowerCase());
    let div = document.createElement("div");
    div.classList.add("wp");
    div.innerHTML = el.toLocaleLowerCase();
    english.append(div);
  } else {
    russianArr.push(el.toLocaleLowerCase());
    let div = document.createElement("div");
    div.classList.add("wp");
    div.innerHTML = el.toLocaleLowerCase();
    russian.append(div);
  }
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numR;
const words = () => {
  let num = getRandomInt(0, engilshArr.length - 1);
  englishWord.innerHTML = `<span>${engilshArr[num]}</span>`;
  numR = num;
  russianWord.innerHTML = "";
};

nextBtn.addEventListener("click", () => {
  words();
});

openBtn.addEventListener("click", () => {
  russianWord.innerHTML = `<span>${russianArr[numR]}</span>`;
});
