let dogs = [];
for (let i = 0; i < 6; i++) {
  dogs[i] = prompt('Dogs name')
}
dogs.reverse();
let html = '<ul>';
for (let i = 0; i < 6; i++) {
  html += '<li>';
  html += dogs[i];
  html += '</li>'
}
html += '</ul>'
let kohde = document.querySelector('#result');
kohde.innerHTML = html
