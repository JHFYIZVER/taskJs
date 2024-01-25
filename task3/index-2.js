console.log(Number("10"), typeof Number("10")); // явнoе

console.log(+"50"); // неявное

console.log(Number("100")); // явнoе

console.log("" + 1); // неявнoе

console.log(String(1)); // явнoе

console.log(Boolean(0)); // явнoе

console.log(+"001"); // неявное

console.log(1 + ""); // неявное

console.log(Boolean(1)); // явнoе

/* Error
console.log(String(001)); // явнoе 
*/

console.log(Number("Hello World")); // явнoе


/* №3 */

console.log(Number(console.log), Boolean(console.log), String(console.log));
console.log(Number({ name: 'Maxim' }), Boolean({ name: 'Maxim' }), String({ name: 'Maxim' }));
console.log(Boolean(Symbol('key')), String( Symbol('key'))); //Number(Symbol('key')) - error 
console.log(Number(Number), Boolean(Number), String(Number));
console.log(Number(''), Boolean(''), String(''));
console.log(Number(0), Boolean(0), String(0));
console.log(Number(-10), Boolean(-10), String(-10));
console.log(Number('-105'), Boolean('-105'), String('-105'));

/* №4 */

console.log(Number(' 1 2 3 4 5')); // NaN

console.log (Number('12345 ')); // 12345

console.log(String(false)); // 'false' 

console.log(Boolean(0o1)); // true

console.log(Boolean(0.0000001)); // true

console.log(String(undefined)); //'undefined'

console.log(Number('100f')); // NaN

console.log(Number('100')); //100

console.log(Number('000001')); // 1