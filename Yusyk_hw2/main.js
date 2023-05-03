// task 1
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [1,2,3,4,5,6,7,8,9,0];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// task 2
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre

let book1 = {title: 'title1', pageCounty: 100, genre: 'action'};
let book2 = {title: 'title2', pageCounty: 300, genre: 'fantasy'};
let book3 = {title: 'title3', pageCounty: 220, genre: 'romance'};
console.log(book1);
console.log(book2);
console.log(book3);

// task 3
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let bk1 = {
    title: 'title1',
    pageCounty: 100,
    genre: 'action',
    authors: ['Pavlo', 21]
};
let bk2 = {
    title: 'title2',
    pageCounty: 300,
    genre: 'fantasy',
    authors: ['Iren', 38]
};
let bk3 = {
    title: 'title3',
    pageCounty: 220,
    genre: 'romance',
    authors: ['Bogdan', 74]
};

// task 4
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let user = [
    {name: 'Pavlo', username: 'pav21', password: 'myPass21'},
    {name: 'Oleg', username: 'oleg_46', password: 'Pass46Oleg'},
    {name: 'Iren', username: 'i_r_e_n', password: 'Ira_Iren'},
    {name: 'Oksana', username: 'oki2000', password: 'Oki_25'},
    {name: 'Bogdan', username: 'pro100_bogdan', password: '1234pass'},
    {name: 'user6', username: 'user6', password: 'user6'},
    {name: 'user7', username: 'user7', password: 'user7'},
    {name: 'user8', username: 'user8', password: 'user8'},
    {name: 'user9', username: 'user9', password: 'user9'},
    {name: 'user0', username: 'user0', password: 'user0'}
];
console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6].password);
console.log(user[7].password);
console.log(user[8].password);
console.log(user[9].password);

// task 5
// - Є змінна х, якій ви надаєте довільне числове значення.
//Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 21;
if (x !== 0){
    console.log('True')
} else{
    console.log('False')
}
// task 6
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 35;
if (0 <= time && time <= 14){
    console.log('First')
}else if (15 <= time && time <= 29){
    console.log('Second')
}else if (30 <= time && time <= 44){
    console.log('Third')
}else if (45 <= time && time <= 59){
    console.log('Fourth')
}else {
    console.log('error')
}

//task 7
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 15;
if (0 < day && day <= 10){
    console.log('First')
}else if (10 < day && day <= 20){
    console.log('Second')
}else if (20 < day && day <= 31){
    console.log('Third')
}else {
    console.log('error')
}

// task 8
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let week_day = +prompt('Введіть порядковий номер дня тижня:');
switch (week_day){
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    case 7:
        console.log('Sunday')
        break;
    default:
        console.log('error')
}

// task 9
//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let num1 = +prompt('Введіть число 1:');
let num2 = +prompt('Введіть число 2:');
if (num1 > num2){
    console.log(num1 + ' більше');
}else if (num1 < num2){
    console.log(num2 + ' більше');
}else {
    console.log('Числа рівні');
}

//task 11
//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]
if (coursesAndDurationArray[0].monthDuration > 5){
    console.log('super')
}
if (coursesAndDurationArray[1].monthDuration > 5){
    console.log('super')
}
if (coursesAndDurationArray[2].monthDuration > 5){
    console.log('super')
}
if (coursesAndDurationArray[3].monthDuration > 5){
    console.log('super')
}
if (coursesAndDurationArray[4].monthDuration > 5){
    console.log('super')
}
if (coursesAndDurationArray[5].monthDuration > 5){
    console.log('super')
}