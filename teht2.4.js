let numbers = [];
let i = 0;
let number = 1;
while (number != 0) {
  numbers[i] = number = parseInt(prompt("Enter number, type 0 to stop: "));
  i++;
}
numbers.sort(function(a, b){
  return a-b;
});
console.log(numbers);

for (let i = 0; i <= numbers.length; i++) {
  console.log(numbers[i]);
}