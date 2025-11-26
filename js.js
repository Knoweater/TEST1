// let ppp = document.getElementById('para');
// let datajs = [];
// fetch('data.json') 
//   .then(res => res.json())
//   .then(data => {
//     datajs = data;
//   });

// function bla() {
//     console.log(datajs[0].name);
// }
// // ppp.innerHTML = JSON.parse(JSON.stringify(datajs[0].name));
// // ppp.innerHTML = datajs[0].name;
// // console.log(datajs[0].name);
// console.log('s');

fetch('data.json')
    .then(response => response.json()) // Parse JSON
    .then(data => console.log(data)) // Work with JSON data
    .catch(error => console.error('Error fetching JSON:', error));