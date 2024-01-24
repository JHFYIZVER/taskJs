const carName = "lamborgamber";
let maxCarSpeed = prompt("Введи максимальную скорость авто");
let carOwner = prompt("Введите имя владельца");

alert(
  `Название машины: ${carName}, максимальная скорость: ${maxCarSpeed}, владелец машины: ${carOwner}`
);

maxCarSpeed = 150;

console.log(
  `Максимальная скорость измененна, сейчас она состовляет: ${maxCarSpeed}`
);

maxCarSpeed = 170;

console.log(
  `Максимальная скорость измененна, сейчас она состовляет: ${maxCarSpeed}`
);

maxCarSpeed = 180;

console.log(
  `Максимальная скорость измененна, сейчас она состовляет: ${maxCarSpeed}`
);

carOwner = 'Vadim';

console.log(`Сменился владелец, владельцем стал: ${carOwner}`);

carOwner = 'Ivan';

console.log(`Сменился владелец, владельцем стал: ${carOwner}`);

carOwner = 'MrBeast';

console.log(`Сменился владелец, владельцем стал: ${carOwner}`);
