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

//Деструктурирующее присваивание///////////////
// let user = {
//     name: "John",
//     years: 30
//   };

// let {name, years: age, isAadmin = false} = user
// alert(name)
// alert(age)
// alert(isAdmin)
///////////////////////////////////////////////

//Максимальная зарплата////////////////////////
// let salaries = {
//   John: 100,
//   Mary: 250,
//   Pete: 300,
//   Mar: 1001,
// };

// function topSalary(salaries) {
//   if (salaries.length === 0) {
//     return null;
//   }

//   let salary = Object.entries(salaries); //пара: ключ - значение

//   let max = salary.reduce((prev, item) => {  //НАчальный элемент, Следующий
//     if (prev < item) {  //Если начальный меньше чем следующий, вернуть наибольший
//       return item;
//     } else {
//         return prev
//     }
//   }, '');
//  return max[0]  //выводит имя
// }

// console.log(topSalary(salaries));
///////////////////////////////////////////////

//Создайте дату////////////////////////////////

// let date = new Date(2012, 2, 20, 3, 20)
// alert (date)

///////////////////////////////////////////////

//Покажите день недели/////////////////////////
// function getWeekDay(date) {
//     let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

//     return days[date.getDay()]
// }
// let date = new Date(2014, 0, 3)

// alert(getWeekDay(date))
///////////////////////////////////////////////

//День недели в европейской нумерации//////////
// let date = new Date(2012, 0, 3);

// function getLocalDay(date) {

// let numDay = date.getDay()

// if (numDay == "0"){
//     numDay = 7
// }
// return numDay
// }

// alert( getLocalDay(date) );
///////////////////////////////////////////////

//Какой день месяца был много дней назад?//////
// function getDateAgo(date, days) {
// date = day;
// let value = date.setDate(date.getDate() - days)
// return value
// }

// let day = new Date()

// console.log(getDateAgo(day, 1))

//не работает
///////////////////////////////////////////////

//Последнее число месяца?//////////////////////
// function getLastDayOfMonth(year, month) {
//     let date = new Date(year, month, 0);
//     return date.getDate();
// }

// alert(getLastDayOfMonth(2012, 2))
///////////////////////////////////////////////

//Сколько сегодня прошло секунд?///////////////
// function getSecondsToday() {
//   let now = new Date(); //актуальная дата
//   let seconds = (now.getHours()*60*60) + (now.getMinutes()*60) + (now.getSeconds()) // складываем общее количество секунд(часы-> в минуты-> в секунды; минуты-> секнуды)
//   return console.log(seconds)
// }

// getSecondsToday()

///////////////////////////////////////////////

//Сколько секунд осталось до завтра?///////////
// function getSecondsToTomorrow() {
// let now = new Date()

// let seconds = (now.getHours()*60*60) + (now.getMinutes()*60) + (now.getSeconds()) //Сколько уже секунд прошло

// let value = 86400 - seconds //В сутках 86400 сек.

// return console.log(value)

// }

// getSecondsToTomorrow()

///////////////////////////////////////////////

//Форматирование относительной даты////////////
// function formatDate(date) {
// let date = new Date()
// if (date = new Date()){
//   return console.log("прямо сейчас")
// } else if(date)

// }

// formatDate(new Date())

//не понял
///////////////////////////////////////////////

//Преобразуйте объект в JSON, а затем обратно в обычный объект//
// let user = {
//   name: "Василий Иванович",
//   age: 35
// };

// let jsonString = JSON.stringify(user)

// console.log(typeof jsonString)

// let jsonParse = JSON.parse(jsonString)

// console.log(typeof jsonParse)

///////////////////////////////////////////////

//Исключить обратные ссылки////////////////////

///////////////////////////////////////////////

//Вычислить сумму чисел до данного/////////////
// function sumTo(n) {
//  if(n !== 1) {
//  let sum = n + sumTo(n-1)
//  return sum
//  } else {
//    return 1
//  }
// }

// console.log(sumTo(100));
///////////////////////////////////////////////

//Вычислить факториал//////////////////////////
// function factorial(n) {
// if (n !== 1) {
//   let fact = n * factorial(n - 1)
//   return fact
// } else {
//   return 1
// }
// }

// console.log(factorial(5))
///////////////////////////////////////////////

//Числа Фибоначчи//////////////////////////////
// function fib(n) {
//   if (n <= 1) {
//     let fibNumbers = fib(n - 1) + fib(n - 2);
//     return fibNumbers;
//   } else {
//     return 1
//   }
 
// }

// console.log(fib(7));

//Не понимаю где ошибка, просто выводит 1
///////////////////////////////////////////////

//Вывод односвязного списка////////////////////
// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// function printList(list) {
//   alert(list.value)
//   if (list.next) {
//   return printList(list.next)
// }
// }

// printList(list)
///////////////////////////////////////////////

//Вывод односвязного списка в обратном порядке/
// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// function reverseList() {
// if (list.next) {
//   reverseList(list.next)
// }
// alert (list.value)
// }

// reverseList(list)

//Не работает
///////////////////////////////////////////////
