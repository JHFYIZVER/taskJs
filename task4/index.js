const myName = "Вадим";
const programmingLanguage = "JavaScript";
const courseCreatorName = "Дмитрий Валак";
const reasonText =
  "мне нравится творческая сторона веб-разработки, где я могу использовать свои навыки дизайна и программирования, чтобы создавать что-то уникальное и полезное";
const numberOfMonth = 3;

let myInfoText = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} y ${courseCreatorName}.
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен, что пройду данный курс до конца!`;

console.log(myInfoText);

console.log(
  "Всем привет! Меня зовут, " +
    myName +
    ". Сейчас я изучаю язык программирования" +
    programmingLanguage +
    " на курсе по " +
    programmingLanguage +
    " у " +
    courseCreatorName +
    "." +
    " Я хочу стать веб-разработчиком, потому что " +
    reasonText +
    ". До этого я изучал " +
    programmingLanguage +
    numberOfMonth +
    "месяцев. Я уверен, что пройду данный курс до конца!"
);

/* №2 */

myInfoText = myInfoText.replaceAll("JavaScript", "JAVASCRIPT");
console.log(myInfoText);
console.log(myInfoText.length);
console.log(myInfoText[0], myInfoText.charAt(myInfoText.length - 1));

/* №3 */

// let userName = prompt("Как вас зовут?").trim();
// alert(`Bас зовут ${userName.toLowerCase()}.`);

// /* №4 */

// let userAge = prompt("Сколько вам лет?").trim();
// userAge = parseInt(userAge);

// alert(`Bас зовут ${userName} и вам ${userAge} лет`);

// /* №5 */

// let userString = prompt("Введите текст для обрезки").trim();
// let startSliceIndex = +prompt(
//   "Введите индекс, с которого нужно начать обрезку строки"
// );
// let endSliceIndex = +prompt(
//   "Введите индекс, которым нужно закончить обрезку строки"
// );

// let result = userString.slice(startSliceIndex, endSliceIndex);
// alert(`Результат ${result}`);

// /* №6 */

// let userText = prompt("Введите текст");
// let wordFromText = prompt("Введите слово из текста").trim();

// let indexOfWord = userText.indexOf(wordFromText);
// let string = userText.substring(0, indexOfWord).trim();

// alert(`Результат: ${string}`);

/* №7 */

javaScriptDescription =
  "JavaScript - мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.";

let halfLength = Math.floor(javaScriptDescription.length / 2);
let trimmedString = javaScriptDescription.slice(1, halfLength);
let replacedString = trimmedString.replace("а", "А").trim().repeat(3);

let middleIndex = Math.floor(replacedString.length / 2);
let middleCharacter = replacedString[middleIndex];
console.log(middleIndex);
console.log(middleCharacter);
