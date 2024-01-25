let num = 3;
let str = "TextText";
let undef = undefined;
let myObj = {
  age: 20,
};
let bool = false;
let nullType = null;
let sym = Symbol("");
let bigInt = BigInt(9007199254740991);

console.log(Number(num), Boolean(num), String(num));
console.log(Number(str), Boolean(str), String(str));
console.log(Number(undef), Boolean(undef), String(undef));
console.log(Number(myObj), Boolean(myObj), String(myObj));
console.log(Number(bool), Boolean(bool), String(bool));
console.log(Number(nullType), Boolean(nullType), String(nullType));
console.log(Boolean(sym), String(sym)); /* Number(sym) - error */
console.log(Number(bigInt), Boolean(bigInt), String(bigInt));