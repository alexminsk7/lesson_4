'use strict';

// глобальные переменные
let myMoney, myTime;

// создаем функцию для вызова вопросов
function start() {
   myMoney = +prompt("Ваш бюджет на месяц ?", '');
   myTime = prompt("Введите дату в формате YYYY-MM-DD", '');

   while (isNaN(myMoney) || myMoney == "" || myMoney == null) {
      myMoney = +prompt("Ваш бюджет на месяц ?", '');
   }
}
start();

// создаем объект
let appData = {
   moneyData: myMoney,
   timeData: myTime,
   expenses: {},
   optionalExpenses: {},
   income: [],
   savings: true,
   chooseExpenses: function () {
      for (let i = 0; i < 2; i++) {
         let a = prompt('Какая статья расходов?', '');
         let b = +prompt('Во сколько обойдется?', '');

         if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;

         } else {
            i--;
         }
      }
   },
   detectDayBudget: function () {
      appData.moneyPerDay = (appData.moneyData / 30).toFixed(2);
      alert('Ежедневный бюджет: ' + appData.moneyPerDay);
   },
   detectLevel: function () {
      if (appData.moneyPerDay < 100) {
         console.log('Минимальный уровень достатка');
      } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
         console.log('Средний уровень достатка');
      } else if (appData.moneyPerDay > 2000) {
         console.log('Высокий уровень достатка');
      } else {
         console.log('Произошла ошибка');
      }
   },
   checkSavings: function () {
      if (appData.savings == true) {
         let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

         appData.monthIncome = (save / 100 / 12 * percent).toFixed(2);
         alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
      }
   },
   chooseOptExpenses: function () {
      for (let i = 1; i < 3; i++) {
         let opt = prompt("Статья необязательных расходов?", "");

         if ((typeof (opt)) === 'string' && (typeof (opt)) != null &&
            opt != '' && opt.length < 50) {

            appData.optionalExpenses[i] = opt;
         } else {
            i--;
         }
      }
   },
   chooseIncome: function () {
      let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
      appData.income = items.split(', ');
      appData.income.push(prompt("Может что-то еще?"));
      appData.income.sort();

      // проверка для пользователя
      while (isNaN(items) || items == "string" || items == "" || items == null) {
         items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
      }

      // вывод сообщения
      // let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
      items.forEach(function (item, i) {
         alert("Способы доп. заработка: " + i + ': ' + item);
      });
   }
};

// цикл for in для вывода сообщения
for (let key in appData) {
   console.log('Наша программа включает в себя данные: ' + appData);
}