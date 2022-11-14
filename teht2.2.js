let numbofp = parseInt(prompt("How many participants?"));
let participants = [];
for (let i = 0; i < numbofp; i++) {
  participants[i] = prompt('Name')
}
participants.sort();
let html = '<ol>';
for (let i = 0; i < numbofp; i++) {
  html += '<li>';
  html += participants[i];
  html += '</li>'
}
html += '</ol>'
let kohde = document.querySelector('#result');
kohde.innerHTML = html