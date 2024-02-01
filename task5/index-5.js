const userLogin = prompt("Введите логин: ").trim();
const userPassword = prompt("Введите пароль: ").trim();
const existedUserLogin = "the_best_user";
const existedUserPassword = "12345678";

if (existedUserLogin === userLogin && existedUserPassword === userPassword) {
  alert(`Добро пожаловать ${existedUserLogin}!`);
}

/* №2 */

const question1 = +prompt("Сколько будет 2 + 2?");
const answer1 = 4;

const question2 = +prompt("Сколько будет 2 * 2?");
const answer2 = 4;

const question3 = +prompt(
  "У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?"
);
const answer3 = 1;

const question4 = +prompt(
  "У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше 5 конфет. Сколько в итоге конфет осталось у Маши?"
);
const answer4 = 12;

const question5 = +prompt("Сколько будет 2 + 2 * 2?");
const answer5 = 6;

let correctAnswers = 0;
let incorrectAnswers = 0;

if (question1 === answer1) {
  correctAnswers++;
} else {
  incorrectAnswers++;
}

if (question2 === answer2) {
  correctAnswers++;
} else {
  incorrectAnswers++;
}

if (question3 === answer3) {
  correctAnswers++;
} else {
  incorrectAnswers++;
}

if (question4 === answer4) {
  correctAnswers++;
} else {
  incorrectAnswers++;
}

if (question5 === answer5) {
  correctAnswers++;
} else {
  incorrectAnswers++;
}

alert(
  `Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`
);


