let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);
// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n')[0];
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0];

console.log(1-input[0]);
console.log(1-input[1]);
console.log(2-input[2]);
console.log(2-input[3]);
console.log(2-input[4]);
console.log(8-input[5]);

// let input = require('fs').readFileSync(0, 'utf8').toString().split(' ').map(Number);
// let temp=input[0].split(" ").map(v=>+v)
// const sol=temp[0]/temp[1]
// console.log(sol)

// const solution = (input) => {
//     let temp=input[0].split(" ").map(v=>+v)
//     const [a, b] = (input + '').split(' ').map(s => +s);
//     console.log(a / b);
// }

// solution(input);