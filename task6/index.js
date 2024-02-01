/* №1 */

function getName1(name) {
  return `Имя равно ${name}`;
}
console.log(getName1("Вадим"));

const getName2 = function (name) {
  return `Имя равно ${name}`;
};

console.log(getName2("Вадим"));

const getName3 = name => {
  return `Имя равно ${name}`;
};

console.log(getName3("Вадим"));

/* №2 */

let getSumOfNumbers = (number, type = "odd") => {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    if (type === "odd" && i % 2 !== 0) {
      sum += i;
    } else if (type === "even" && i % 2 === 0) {
      sum += i;
    } else if (type === "") {
      sum += i;
    }
  }
};

/* №3 */
let arr = [];

let getDivisorsCount = (number = 1) => {
  if (number < 0 || !Number.isInteger(number)) {
    alert("number должен быть целым числом и больше нуля!");
  } else {
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        arr.push(i);
      }
    }
  }
};
console.log(arr);

getDivisorsCount(10);

/* №4 */

const checkQuestAnswer = (question, correctAnswer) => {
  let answer = prompt(question).trim().toLowerCase();
  if (answer === correctAnswer.toLowerCase().trim()) {
    alert("Правильно!");
  } else {
    alert("Неправильно!");
  }
};

checkQuestAnswer("Арбуз это фрукт или ягода?", "Ягода");
checkQuestAnswer("Сколько в среднем зубов у взрослого человека??", "32");
checkQuestAnswer("Как называется самая маленькая птица в мире?", "Колибри");

/* №5 */

function showSuccessMessage(message) {
  console.log(message);
}

function showErrorMessage(message) {
  console.log(message);
}

function checkTextOnErrorSymbol(
  text,
  errorSymbol,
  successCallback = showSuccessMessage,
  errorCallback = showErrorMessage
) {
  for (let i = 0; i < text.length; i++) {
    if (text[i] === errorSymbol) {
      errorCallback(
        `Найден запрещенный символ "${errorSymbol}" под индексом ${i}`
      );
    } 
  }
  if(!text.includes(errorSymbol)){
   successCallback('В данном сообщении нет запрещенных символов!')
  }
}

checkTextOnErrorSymbol('Привет вадим, как дела?', 'к', showSuccessMessage, showSuccessMessage)