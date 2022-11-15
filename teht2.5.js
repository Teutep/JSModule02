const numbers = [];
let duplicates = false;

while (duplicates === false) {
    let number = parseInt(prompt("Give me a new number"));
    for (let i of numbers) {
        if (number === i) {
            duplicates = true;
            alert(`${number} has already been given, stopping program.`)
            break;
        }
    }
    if (duplicates === false) {
        numbers.push(number);
    }
}
numbers.sort();
for (let i of numbers) {
    console.log(i)
}