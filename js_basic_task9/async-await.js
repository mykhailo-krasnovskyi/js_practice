// async function getPostById(postId) {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
//     const data = await response.json();
//     return data;
// }

// // getPostById(5)
// //     .then(data => console.log(data));




// async function printData() {
//     const postData = await getPostById(5);
//     console.log(postData);
// }

// printData();


// async function fetchTemperature(city) {
//     const apiKey = 'bd664c238b837a54a22ee16796bbea50';
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     console.log(data);
// }


// const city = 'Lviv';
// fetchTemperature(city)
//     .then(temperature => {
//         if (temperature !== null) {
//             console.log(`Current temp in city ${city}: ${temperature}°C`);
//         } else {
//             console.log('Error');
//         }
//     });
