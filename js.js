// let username = 'артем';
// let a = 'привет ' + username;
// console.log(a);

// let a = `привет ${username}! как дела?`;
// console.log(a);

// const a = ['пися', 'попа','шпили','ротн','долбн'];
// console.log(a[0]);

// let a = ['пися', 'попа', 'шпили', 'ротн', 'долбн'];
// for (let i = 0; i < 4; i++) {
//     console.log(a[i]);
// }

// let a = ['пися', 'попа', 'шпили', 'ротн', 'долбн'];
// console.log(a.length);

// ОБХОД МАССИВА С ПОМОЩЬЮ FOR()

// let a = ['пися', 'попа', 'шпили', 'ротн', 'долбн'];
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }

// ОБХОД МАССИВА С ПОМОЩЬЮ FOREACH()

// let a = ['пися', 'попа', 'шпили', 'ротн', 'долбн'];
//  a.forEach(function(item, index){
//      console.log(`элемент с индексом ${index} = ${item}`);
//  })

// ФУНКЦИИ!!!

// function hello(name){
//     console.log(`привет ${name}! как дела?`);
// }
// hello('артем');
// hello('мария');
// hello('даша');

// function calculateSum(x, y) {
//     let result = x + y;
//     console.log(result);
// }
// calculateSum(10, 209);

// ОБЪЕКТЫ!!!

// const artem = {
//     name: 'Artem',
//     age: '32',
//     speciality: 'html coder',
//     city: 'Khabarovsk',
//     sayHi: function () {
//         console.log(`Привет, меня зовут ${this.name}, мне ${this.age}, я ${this.speciality} из города ${this.city}.`);
//     }
// }
// artem.sayHi();

// ФУНКЦИЯ КОНСТРУКТОР СОЗДАНИЕ ОБЪЕКТОВ!!!

// function Person(name, age, spec, city) {
//     this.name = name;
//     this.age = age;
//     this.spec = spec;
//     this.city = city;
//     this.sayHi = function () {
//         console.log(`Привет, меня зовут ${this.name}, мне ${this.age}, я ${this.spec} из города ${this.city}.`);
//     };
// }
// const artem = new Person('Артем', '32', 'веб-разработчик', 'Хабаровск');
// console.log(artem);
// artem.sayHi();

// ПРАКТИКА!!! ПРИМЕР 1. ВЫВЕСТИ СКРЫТЬ ЭЛЕМЕНТ ПО НАЖАТИЮ КНОПКИ:

// const but = document.querySelector('#btn');
// const cont = document.querySelector('#content');

// but.addEventListener("click", function () {
//     console.log("click");
//     // ВАРИАНТ ПЕРВЫЙ!!!
//     if (cont.classList.toggle('none')) {
//         but.textContent = "Открыть блок";
//     } else {
//         but.textContent = "Закрыть блок";
//     }
// });

// ВАРИАНТ ВТОРОЙ!!!

// cont.classList.toggle('none');
// if (cont.classList.contains('none')){
// but.textContent = "Открыть блок";
// }else {
//     but.textContent = "Закрыть блок";
// }
// });

// ПРИМЕР 2. АККОРДЕОН!!!

// const title = document.querySelectorAll('[data-name = "accordeon-title"]');
// title.forEach(function (item) {
//     item.addEventListener('click', function () {
//         // console.log(this.nextElementSibling);
//         this.nextElementSibling.classList.toggle('none');
//     })
// })

// ПРИМЕР 3. ТАБЫ!!!
// находим все элементы с data-tab-content
// const contentBoxes = document.querySelectorAll('[data-tab-content]');
// // находим все элементы с data-tab
// const tabHeaders = document.querySelectorAll('[data-tab]');
// // обходим все элементы(обращаемся к каждому поочередно)
// tabHeaders.forEach(function (item) {
//     // отслеживаем клик по каждому из найденных элементов
//     item.addEventListener('click', function () {
//         // обходим все элементы(обращаемся к каждому поочередно)
//         contentBoxes.forEach(function (item) {
//             // добавляем каждому из элементов класс none
//             item.classList.add('none');
//         });
//         // находим элемент со значением data - "tab"
//         const contentBox = document.querySelector('#' + this.dataset.tab);
//         // и убираем у этого элемента класс none
//         contentBox.classList.remove('none');
//     })

// })

// МАСКА ВВОДА НОМЕРА ТЕЛЕФОНА!!!

// document.addEventListener("DOMContentLoaded", function () {
//     var phoneInputs = document.querySelectorAll('input[data-tel-input]');

//     var getInputNumbersValue = function (input) {
//         // Return stripped input value — just numbers
//         return input.value.replace(/\D/g, '');
//     }

//     var onPhonePaste = function (e) {
//         var input = e.target,
//             inputNumbersValue = getInputNumbersValue(input);
//         var pasted = e.clipboardData || window.clipboardData;
//         if (pasted) {
//             var pastedText = pasted.getData('Text');
//             if (/\D/g.test(pastedText)) {
//                 // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
//                 // formatting will be in onPhoneInput handler
//                 input.value = inputNumbersValue;
//                 return;
//             }
//         }
//     }

//     var onPhoneInput = function (e) {
//         var input = e.target,
//             inputNumbersValue = getInputNumbersValue(input),
//             selectionStart = input.selectionStart,
//             formattedInputValue = "";

//         if (!inputNumbersValue) {
//             return input.value = "";
//         }

//         if (input.value.length != selectionStart) {
//             // Editing in the middle of input, not last symbol
//             if (e.data && /\D/g.test(e.data)) {
//                 // Attempt to input non-numeric symbol
//                 input.value = inputNumbersValue;
//             }
//             return;
//         }

//         if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
//             if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
//             var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
//             formattedInputValue = input.value = firstSymbols + " ";
//             if (inputNumbersValue.length > 1) {
//                 formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
//             }
//             if (inputNumbersValue.length >= 5) {
//                 formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
//             }
//             if (inputNumbersValue.length >= 8) {
//                 formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
//             }
//             if (inputNumbersValue.length >= 10) {
//                 formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
//             }
//         } else {
//             formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
//         }
//         input.value = formattedInputValue;
//     }
//     var onPhoneKeyDown = function (e) {
//         // Clear input after remove last symbol
//         var inputValue = e.target.value.replace(/\D/g, '');
//         if (e.keyCode == 8 && inputValue.length == 1) {
//             e.target.value = "";
//         }
//     }
//     for (var phoneInput of phoneInputs) {
//         phoneInput.addEventListener('keydown', onPhoneKeyDown);
//         phoneInput.addEventListener('input', onPhoneInput, false);
//         phoneInput.addEventListener('paste', onPhonePaste, false);
//     }
// })

// МОДАЛЬНОЕ ОКНО(ВСПЛЫВАЮЩЕЕ)!!!!

const button = document.querySelector("[data-modal-button]");
const modal = document.querySelector("[data-modal]");
const buttonClose = document.querySelector("[data-modal-close]");

button.addEventListener("click", function () {
  modal.classList.remove("none");
});
buttonClose.addEventListener("click", function () {
  modal.classList.add("none");
});
modal.addEventListener("click", function () {
  modal.classList.add("none");
});
// modal.querySelector(".modal_window").addEventListener("click", function (e) {
//   e.stopPropagation();
// });
const window_modal = document.querySelector(".modal_window");
console.log(window_modal);
window_modal.addEventListener('mouseover', function(){
    window_modal.classList.add('back_window');
})
window_modal.addEventListener('mouseout', function(){
    window_modal.classList.remove('back_window');
})