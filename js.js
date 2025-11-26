let ppp = document.getElementById('para');
let datajs = [];
fetch('data.json') 
  .then(res => res.json())
  .then(data => console.log(data));

// function bla() {
//     console.log(datajs[0].name);
// }
// ppp.innerHTML = JSON.parse(JSON.stringify(datajs[0].name));
// ppp.innerHTML = datajs[0].name;
// console.log(datajs[0].name);
// console.log('s');

