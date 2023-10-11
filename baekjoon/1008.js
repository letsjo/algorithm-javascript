let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);
console.log(input);
let a = input[0];
let b = input[1];

// let temp=input[0].split(" ").map(v=>+v)
// const sol=temp[0]/temp[1]
// console.log(sol)

// const solution = (input) => {
//     let temp=input[0].split(" ").map(v=>+v)
//     const [a, b] = (input + '').split(' ').map(s => +s);
//     console.log(a / b);
// }

// solution(input);