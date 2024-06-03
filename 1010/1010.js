let fs = require('fs');
let input = fs.readFileSync('./exam.txt').toString().split('\n');

let numbers = [];

for(let i = 1; i < input.length; i++) {
  if(input[i] !== ''){
    numbers.push(input[i].split(' '));
  }
}

for(let i = 0; i < numbers.length; i++){ 
  let n = Number(numbers[i][1]);
  let r = Number(numbers[i][0]);

  let result = factorial(n) / ((factorial(n - r) * factorial(r)));

  console.log(result.toFixed(0));
}

function factorial (n) {
  if(n <= 1) return 1;
  return n * factorial(n-1)
}
