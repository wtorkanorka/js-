//сделать первый символь заглавным///////////////

// function ucFirst(str) {

//   let newStr = str[0].toUpperCase();
//   alert(str);
// }

// alert(ucFirst("вася"));

// не работает

////////////////////////////////////////////////

//проверка на спам//////////////////////////////

// let str = 'innocent rabbit';

// function checkSpam(str) {
//     console.log(str)
//   str.toLowerCase();
//   console.log(str)
//   if (str.includes("viagra") || str.includes("xxx")) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }
// checkSpam(str);

////////////////////////////////////////////////

//усечение строки///////////////////////////////

// function truncate(str, maxlength) {
//   if (str.length > maxlength) {
//     return alert(str.slice(0, (maxlength - 1))+ "...");
//   } else {
//     return alert(str);
//   }
// }

// truncate("Вот, что мне хотелось бы сказать на эту тему:", 30);

////////////////////////////////////////////////

//ВЫДЕЛИТЬ ЧИСЛО////////////////////////////////

// function extractCurrencyValue(str) {
//   return str.slice(1);
// }
// console.log(extractCurrencyValue("$120"));

////////////////////////////////////////////////

//str->obj//////////////////////////////////////

// function inObject(str) {
//    let newObject = {}
// let first = str.slice(0);
// let last = str.substr(str.lenght - 1);
// return newObject = {
//     firstSymbol: first,
//     lastSymbol: last
// };
// };
// console.log(inObject().newObject())

// inObject("Строка")

////////////////////////////////////////////////

//find->true/false//////////////////////////////

// let firstStr = "Говно";
// let secondStr = firstStr;

// function find(firstStr, secondStr) {
//   secondStr.slice(0, 10);

//   return firstStr.includes(secondStr);
// }

// console.log(find(firstStr, secondStr));

////////////////////////////////////////////////





