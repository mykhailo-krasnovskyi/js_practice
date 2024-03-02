/*
Виведіть таблицю множення для числа від 1 до 10
*/


// let number = 5;
// for (let i = 1; i <= 10; i++) {
//     let result = number * i;
//     console.log(`${number}x${i} = ${result}`)
// }


// let i = 1;
// while (i <= 10) {
//     let result = number * i;
//     console.log(`${number}x${i} = ${result}`);
//     i++;
// }
//------------------------
// Факторіал

// let number = 5;
// let factorial = 1;

// for (let i = 2; i <= number; i++) {
//     factorial *= i;
//     console.log(`factorial ${factorial}, i ${i}`)
// }

// console.log(factorial);

//------------------------

//Робота із строками
// const str = "12345";
// console.log(str.charAt(0))
// const str1 = "Hello, world, fasfsa";
// const str2 = "12345";
// const str3 = "     hel  lo     ";
//console.log(str1.concat(str2))
// console.log(str1.indexOf('o', 5))
// console.log(str1.split(','))
// console.log(str1.includes('Hello1',3))
// console.log(str1.toLowerCase()==='hello, world, fasfsa')
// console.log(str3.trim())



//------------------------

// Генерація рандомного числа від 1 до 10
// console.log(Math.floor(Math.random() * 10)+1)

//------------------------
// Генерація паролю

// let passLength = 3;
// let newPassword = '';

// const chars = "qwertyuiopasdfghjkl123456789";

// for (i = 0; i < passLength; i++) {
//     let randomIndex = Math.floor(Math.random() * chars.length);
//     newPassword = newPassword + chars[randomIndex];

// }
// console.log(chars[chars.length-1])
// console.log(newPassword);
//------------------------


// Підрахувати кількість голосних літер

let userInput = "test string";
let newString = "test string";
let charToChange = ''


for (let i = 0; i < userInput.length; i++) {
    let currentChar = userInput[i];
    if (currentChar === 'a' || currentChar === 'e' || currentChar === 'i' || currentChar === 'o' || currentChar === 'u') {
        vowelCount = vowelCount + 1;
        console.log(`Знайдена голосна літера! Індекс ${i}, літера ${currentChar}`)
    }
}


console.log(`Кількість голосних літер: ${vowelCount}`);
