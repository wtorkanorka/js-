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
// let first = str.charAt(0);
// let last = str.substr(-1)
// return newObject = {
//     firstSymbol: first,
//     lastSymbol: last
// };
// };
// console.log(inObject("Строка"))

//РАБОТАЕт
////////////////////////////////////////////////

//find->true/false//////////////////////////////

// let firstStr = "";
// let secondStr = firstStr;

// function find(firstStr, secondStr) {
//   secondStr.slice(0, 10);

//   return firstStr.includes(secondStr);
// }

// console.log(find(firstStr, secondStr));

////////////////////////////////////////////////

//yourFunc('abcdefgh') // 'CdeF'////////////////

// let str = "abcdef";

// function cutTheStr(str) {
//   let newStr = str;
//   newStr = newStr.substring(2, newStr.lenght);

//   newStr = newStr[0].toUpperCase() + newStr.substring(1); //Заглавная первая буква

//   newStr = newStr.slice(0, -2) //Без 2 последних букв

//   newStr = newStr.substring(0) + newStr.substr(-1).toUpperCase() //последняя загл буква

// newStr = (newStr.slice(0, -2)) + (newStr.slice(-1)) // убирает предпоследний символ

//   return newStr;
// }
// console.log(cutTheStr("abcdefgh"));

//РАБОТАЕТ
////////////////////////////////////////////////

// function truncate(str, maxlength) {
//     if (str.length > maxlength){
//     str = str.slice(0, maxlength - 1) + '…' ;
//         if ((str.maxlength)=="," || (str.maxlength)=="." || (str.maxlength)==":" || (str.maxlength)==";") {
//             // str = str.slice(0, maxlength - 1) + '…' ;
//             str = str.slice(0, -1) + '...'
//             return str;
//         }
//         else {
//             return str;
//         }
//     }
//     else{ return str;}
//   }

// let str = "1234,567"

// alert(truncate(str, 6));

///////////////////////////////////////////////

//Операции с массивами/////////////////////////

// let styles = ["Джаз", "Блюз"]
// styles.push("Рок-н-Ролл")
// styles[Math.floor((styles.length)/2)] ="Классика"
// console.log(styles.shift())
// styles.unshift("Рэп", "Рэгги")
// console.log(styles)

///////////////////////////////////////////////

//Сумма введённых чисел////////////////////////
// function sumInput() {
//   let arrNumbers = [];
//   while (true) {
//     let value = prompt("значение:", "");
//     if ((value == "") || (value == null)) {
//       break;
//     }
//     arrNumbers.push(value)
//   }
//   console.log(arrNumbers)

//   let i = 0
//   for(let sum of arrNumbers) {
//      i +=sum
//   }
//  return  console.log(i)

// }

// sumInput();
//Не складывает
///////////////////////////////////////////////

//Переведите текст вида border-left-width в borderLeftWidth//

// function camelize(str) {
//  let newStr = str.split("-");
//  console.log(newStr)
//  let result = newStr.map(newStr[0].toUpperCase() + newStr.slice(1))

//  console.log(result)
// return result
// }

// camelize("my-short-string");

//НЕ робит
///////////////////////////////////////////////

//Фильтрация по диапазону//////////////////////

// function camelize(str) {
//  let newStr = str.split("-");
//  console.log(newStr)
//  let result = newStr.map(newStr[0].toUpperCase() + newStr.slice(1))

//  console.log(result)
// return result
// }

// camelize("my-short-string");

// Не работает
///////////////////////////////////////////////

//Сортировать в порядке по убыванию////////////
// let arr = [5, 2, 1, -10, 8];
// arr.sort()
// alert(arr)
///////////////////////////////////////////////

//Скопировать и отсортировать массив///////////
// let arr = ["HTML", "JavaScript", "CSS"];
// alert(arr);
// function copySorted() {
//   return arr.sort();
// }

// let sorted = copySorted(arr);

// alert(sorted);
//Работает

///////////////////////////////////////////////

//Трансформировать в массив имён///////////////
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map( users.name);

// alert( names );
//НЕ работает
///////////////////////////////////////////////

//Сумма свойств объекта////////////////////////


// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
//   Gary: 250,
// };

// function sumSalaries(salaries) {
//   let sum = 0;

//   for (let salarie of Object.values(salaries)) {
//     sum += salarie;
//   }
//   return sum;
// }

// alert(sumSalaries(salaries));


//Работает
///////////////////////////////////////////////

//Подсчёт количества свойств объекта///////////
// let user = {
//     name: 'John',
//     age: 30,
//     ages: 30
//   };

// function count(obj) {
// return console.log (Object.keys(user).length)

// }
// count(user)

///////////////////////////////////////////////
