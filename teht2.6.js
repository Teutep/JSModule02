function die() {
    return Math.floor(Math.random()*6)+1;
}

const dice = [];
while (dice[dice.length-1] !== 6) {
    let toss = die();
    dice.push(toss);
    let listofthrows = document.createElement("li");
    listofthrows.innerText = toss;
    document.querySelector("#result").appendChild(listofthrows);
}