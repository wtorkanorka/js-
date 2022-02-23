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
