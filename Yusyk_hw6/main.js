// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world'
console.log(str1.length)
let str2 = 'lorem ipsum'
console.log(str2.length)
let str3 = 'javascript is cool'
console.log(str3.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let upperCase1 = str1.toUpperCase()
console.log(upperCase1)
let upperCase2 = str2.toUpperCase()
console.log(upperCase2)
let upperCase3 = str3.toUpperCase()
console.log(upperCase3)

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let lowerCase1 = 'HELLO WORLD'
console.log(lowerCase1.toLowerCase())
let lowerCase2 = 'LOREM IPSUM'
console.log(lowerCase2.toLowerCase())
let lowerCase3 = 'JAVASCRIPT IS COOL'
console.log(lowerCase3.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str =  ' dirty string   ';
console.log(str.trim())

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let strr = 'Ревуть воли як ясла повні';
let stringToarray = (value) => {
    let arr = value.split(' ')
    return arr
}
console.log(stringToarray(strr))


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arr1 = [10,8,-7,55,987,-1011,0,1050,0]
let mapStr = arr1.map((value) => {
    return value.toString()
})
console.log(mapStr)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
let sortNums = (arr, direction) => {
    if(direction === 'ascending'){
        return arr.sort((int1, int2) => {
            return int1 - int2;
        })
    }else if(direction === 'descending') {
        return arr.sort((int1, int2) => {
            return int2 - int1;
        })
    }
}
console.log(sortNums(nums, 'descending'))

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let sortMonth = ((arr) => {
    let c = coursesAndDurationArray.sort((a,b) => {
        return b.monthDuration - a.monthDuration
    })
    return c
})
console.log(sortMonth(coursesAndDurationArray))
let filterMonth = coursesAndDurationArray.filter(month => month.monthDuration > 4)
console.log(filterMonth)
let transform = coursesAndDurationArray.map((profession, index) => {
    return {id: index + 1, title: profession.title, monthDuration: profession.monthDuration}
} )
console.log(transform)

// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let cards = [
    { cardSuit: 'spade', value: '6', color: 'black' },
    { cardSuit: 'diamond', value: '6', color: 'red' },
    { cardSuit: 'heart', value: '6', color: 'red' },
    { cardSuit: 'clubs', value: '6', color: 'black' },
    { cardSuit: 'spade', value: '7', color: 'black' },
    { cardSuit: 'diamond', value: '7', color: 'red' },
    { cardSuit: 'heart', value: '7', color: 'red' },
    { cardSuit: 'clubs', value: '7', color: 'black' },
    { cardSuit: 'spade', value: '8', color: 'black' },
    { cardSuit: 'diamond', value: '8', color: 'red' },
    { cardSuit: 'heart', value: '8', color: 'red' },
    { cardSuit: 'clubs', value: '8', color: 'black' },
    { cardSuit: 'spade', value: '9', color: 'black' },
    { cardSuit: 'diamond', value: '9', color: 'red' },
    { cardSuit: 'heart', value: '9', color: 'red' },
    { cardSuit: 'clubs', value: '9', color: 'black' },
    { cardSuit: 'spade', value: '10', color: 'black' },
    { cardSuit: 'diamond', value: '10', color: 'red' },
    { cardSuit: 'heart', value: '10', color: 'red' },
    { cardSuit: 'clubs', value: '10', color: 'black' },
    { cardSuit: 'spade', value: 'jack', color: 'black' },
    { cardSuit: 'diamond', value: 'jack', color: 'red' },
    { cardSuit: 'heart', value: 'jack', color: 'red' },
    { cardSuit: 'clubs', value: 'jack', color: 'black' },
    { cardSuit: 'spade', value: 'queen', color: 'black' },
    { cardSuit: 'diamond', value: 'queen', color: 'red' },
    { cardSuit: 'heart', value: 'queen', color: 'red' },
    { cardSuit: 'clubs', value: 'queen', color: 'black' },
    { cardSuit: 'spade', value: 'king', color: 'black' },
    { cardSuit: 'diamond', value: 'king', color: 'red' },
    { cardSuit: 'heart', value: 'king', color: 'red' },
    { cardSuit: 'clubs', value: 'king', color: 'black' },
    { cardSuit: 'spade', value: 'ace', color: 'black' },
    { cardSuit: 'diamond', value: 'ace', color: 'red' },
    { cardSuit: 'heart', value: 'ace', color: 'red' },
    { cardSuit: 'clubs', value: 'ace', color: 'black' },
];
let aceSpade = cards.filter(card => card.value === 'ace' && card.cardSuit === 'spade')
console.log(aceSpade)
let all6 = cards.filter(card => card.value === '6')
console.log(all6)
let allRed = cards.filter(card => card.color === 'red')
console.log(allRed)
let allDiamond = cards.filter(card => card.cardSuit === 'diamond')
console.log(allDiamond)
let over9 = cards.filter(cards => card.cardSuit ==='clubs' && (card.value >= '9' || +(card.value) >= 9))
console.log(over9)

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let obbCard = { spades: [], diamonds: [], hearts: [], clubs: [] }
let cartPackege = cards.reduce((suit, card) =>{
    if (card.cardSuit === 'spade') {
        suit.spades.push(card);
    }else if(card.cardSuit === 'diamond') {
        suit.diamonds.push(card);
    }else if(card.cardSuit === 'heart') {
        suit.hearts.push(card);
    }else if(card.cardSuit === 'clubs') {
        suit.clubs.push(card);
    }
    return suit;
}, obbCard)
console.log(cartPackege)
