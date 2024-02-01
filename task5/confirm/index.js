// const question1 = confirm("JavaScript появился в 1995 году?");
// const answer1 = true;

// if (question1 === answer1) {
//   alert("Верно");
// } else {
//   alert("Неверно");
// }
// const question2 = confirm("Спецификация JavaScript называется ECMAScript?");
// const answer2 = true;
// if (question2 === answer2) {
//   alert("Верно");
// } else {
//   alert("Неверно");
// }
// const question3 = confirm("JavaScript был создан за 1 месяц?");
// const answer3 = false;
// if (question3 === answer3) {
//   alert("Верно");
// } else {
//   alert("Неверно");
// }

// /* №4 */

// for (let i = 0; i < 3; i += 1) {
//   let newStudent = prompt("Введите имя нового cтудента!");
//   newStudent = newStudent.trim();
//   if (newStudent) alert(`Добро пожаловать, ${newStudent}!`);
// }

// let i = 0;
// while (i < 3) {
//   let newStudent = prompt("Введите имя нового cтудента!");
//   newStudent = newStudent.trim();
//   if (newStudent) alert(`Добро пожаловать, ${newStudent}!`);
//   i += 1;
// }

// do {
//   let newStudent = prompt("Введите имя нового cтудента!");
//   newStudent = newStudent.trim();
//   if (newStudent) alert(`Добро пожаловать, ${newStudent}!`);
//   i += 1;
// } while (i < 3);

// /* №5 */

// let number = 100;
// let sum = 0;

// for (let i = 0; i <= 100; i += 1) {
//    sum += i;
// }
// alert(sum);

// /* №6 */

// let clientName = "Игорь";
// let clientSpentForAllTime = 110;
// let clientSpentToday = 25;
// let discount = 0;

// if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
//   discount = 10;
// }

// if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
//   discount = 20;
// }

// if (clientSpentForAllTime >= 500) {
//   discount = 30;
// }

// clientSpentForAllTime += clientSpentToday;

// alert(
//   `Спасибо, ${clientName}! К оплате ${
//     clientSpentToday - (clientSpentToday * discount) / 100
//   }$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`
// );

// /* №7 */

// let clientName = prompt("Введите ваше имя!").trim();
// if (typeof clientName !== "string" || clientName === "") {
//   alert("Вы ввели некорректное имя!");
//   clientName = prompt("Введите ваше имя!").trim();
// }
// let clientSpentForAllTime = +prompt("Сколько вы потратили за все время?");
// if (typeof clientSpentForAllTime !== "number" || clientSpentForAllTime === "") {
//   alert("Вы ввели некорректную сумму!");
//   clientSpentForAllTime = +prompt("Сколько вы потратили за все время?");
// }
// let clientSpentToday = +prompt("Сколько вы потратили сегодня?");
// if (typeof clientSpentToday !== "number" || clientSpentToday === "") {
//   alert("Вы ввели некорректную сумму!");
//   clientSpentToday = +prompt("Сколько вы потратили сегодня?");
// }
// let discount = 0;

// if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
//   discount = 10;
// }

// if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
//   discount = 20;
// }

// if (clientSpentForAllTime >= 500) {
//   discount = 30;
// }

// clientSpentForAllTime += clientSpentToday;

// alert(
//   `Спасибо, ${clientName}! К оплате ${
//     clientSpentToday - (clientSpentToday * discount) / 100
//   }$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`
// );

/* №8 */

let password = prompt("Введите пароль!");
let checkLength = false;
let checkUpperCase = false;
let checkNumber = false;

function checkPassword(password) {
  if (password.length >= 3 && password.length < 20) {
    checkLength = true;
  } else {
    alert(
      "Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз."
    );
    return;
  }
  for (let i = 0; i < password.length; i++) {
    if (password[i] !== password[i].toLowerCase()) {
      checkUpperCase = true;
      break;
    }
  }
  for (let i = 0; i < password.length; i++) {
    if (!isNaN(parseInt(password[i]))) {
      checkNumber = true;
      break;
    }
  }
  if (checkLength && checkUpperCase && checkNumber) {
    alert("Пароль валидный. Добро пожаловать в аккаунт!");
  } else {
    alert(
      "Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз."
    );
  }
}
checkPassword(password);
