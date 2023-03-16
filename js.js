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

