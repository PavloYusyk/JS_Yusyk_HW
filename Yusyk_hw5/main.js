// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
area = (a,b) => (a * b)
console.log(area(7,9))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
radius = (r) => Math.PI * r * r
console.log(radius(6))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
cylinder = (h,r) => 2 * Math.PI * h * r
console.log(cylinder(4,9))

// - створити функцію яка приймає масив та виводить кожен його елемент
arrFun = (arr) => {
    for (let i = 0; i < arr.length; i++){
    console.log(arr[i])
    }
}
arrFun([4,6,67,1])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
parag = (text) => {
    document.write(`<p>${text}</p>`)
}
parag('hello')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
list = (text1) => {
    document.write(`<ul>`)
    document.write(`<li>${text1}</li>`)
    document.write(`<li>${text1}</li>`)
    document.write(`<li>${text1}</li>`)
    document.write(`</ul>`)
}
list('milk')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function list1(text,number){
    document.write(`<ul>`)
    for (let i = 0; i < number; i++){
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)

}
list1('bear',3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
array = (arr) => {
    document.write(`<ul>`)
    for (let i = 0; i < arr.length; i++){
        document.write(`<li>${arr[i]}</li>`)
    }
    document.write(`</ul>`)
}
array([1, 'hello',false])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
arrays1 = (arr) => {
    for (let i = 0; i < arr.length; i++){
        document.write(`<div>`)
        document.write(`<p>${arr[i].id}</p>`)
        document.write(`<p>${arr[i].name}</p>`)
        document.write(`<p>${arr[i].age}</p>`)
        document.write(`</div>`)
    }
}
arrays1([{id : 1, name : 'pavlo', age : 21},{id : 2, name: 'Yulia', age: 20},{id: 3, name: 'Oksana', age: 22}])

// - створити функцію яка повертає найменьше число з масиву
arrays2 = (arr) => {
    for (let i = 0; i < arr.length; i++){
        let a = arr[0]
        if(a > arr[i]){
            a = arr[i]
        }
        return a;
    }
}
let result = arrays2([3,4,8,1])

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
arrays3 = (arr) => {
    let a = 0
    for (let i = 0; i < arr.length; i++){
        a += arr[i];
    }
    return a;
}
console.log(arrays3([1,2,3]))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
arrays4 = (arr,in1,in2) => {
    let a = arr[in1]
    arr[in1] = arr[in2]
    arr[in2] = a
    return arr
}
console.log(arrays4([1,2,4,3,5],2,3))

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
convert = (sumUAH,currencyValues,exchangeCurrency) => {
    let a = 0
    for (let i = 0; i < currencyValues.length; i++){
        if (currencyValues[i].currency === exchangeCurrency){
            a = sumUAH * currencyValues[i].value
        }
    }
    return a
}
console.log(convert(480,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR'))