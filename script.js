

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
