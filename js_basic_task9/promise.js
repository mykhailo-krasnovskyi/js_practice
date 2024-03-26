// const newPromise = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         resolve(10);
//     }, 3000);
// })

// newPromise
//     .then(value => value += 10)
//     .then(value => value *= 10)
//     .then(value => value -= 3)
//     .then(value => console.log(value));


// newPromise.then(
//     function (value) {
//         return value += 10;
//     }).then(function (value) {
//         return value *= 10;
//     }).then(function (value) {
//         return value -= 3;
//     }).then(function (value) {
//         console.log(value)
//     })


// Reject
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(function () {

//         const randomNumber = Math.random();

//         if (randomNumber > 0.5) {
//             console.log("Операція успішна");
//             resolve(randomNumber);
//         } else {
//             reject(new Error("Операція не вдалася"));
//         }

//     }, 3000);
// })


// myPromise
//     .then(value => value *= 10)
//     .then(value => console.log(value))
//     .catch((err) => {
//         console.log(err.message);
//     })

// function createPromise(value, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (value === "Second") {
//                 reject(new Error("Error message"));
//             }
//             resolve(value);
//         }, delay)
//     })
// }

// const promises = [
//     createPromise("First", 1000),
//     createPromise("Second", 2000),
//     createPromise("Third", 3000)
// ]

// Promise.all(promises)
//     .then(result => {
//         console.log(result[0])
//     })
//     .catch((error) => {
//         console.log(error);
//     })


