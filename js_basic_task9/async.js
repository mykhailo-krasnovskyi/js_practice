

// function startProgram() {
//     console.log("Start");
// }

// function finishProgram() {
//     console.log("Finish");
// }

// startProgram();
// setTimeout(function () {
//     console.log("Async operation");
// }, 0);
// finishProgram();

// Error 
// function getData() {
//     console.log("Request to DB sent");

//     setTimeout(function () {
//         return "Data from server";
//     }, 3000);
// }

// const data = getData();

// console.log(data);

// Solution via callback
// function getData(callback) {
//     console.log("Request to DB sent");

//     setTimeout(function () {
//         const data = "Data from server";
//         callback(data);
//     }, 3000);
// }

// function printData(data) {
//     console.log("Data: "+data);
// }

// getData(printData);


// Callback Hell
// function step1(callback) {
//     setTimeout(function () {
//         console.log("Step 1 completed");
//         callback();
//     }, 3000);
// }

// function step2(callback) {
//     setTimeout(function () {
//         console.log("Step 2 completed");
//         callback();
//     }, 3000);
// }

// function step3(callback) {
//     setTimeout(function () {
//         console.log("Step 3 completed");
//         callback();
//     }, 3000);
// }

// step1(function () {
//     step2(function () {
//         step3(function () {
//             console.log("All steps completed");
//         });
//     });
// });