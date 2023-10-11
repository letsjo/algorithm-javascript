// 문자열 폭발
// https://www.acmicpc.net/problem/9935

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\r\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n');

let str = input[0];
let bomb = input[1];

let stack = [];

for (let i = 0; i < str.length; i += 1) {
  stack.push(str[i]);
  if (stack.length >= bomb.length) {
    let isBomb = true;
    for (let j = 0; j < bomb.length; j += 1) {
      if (
        stack[stack.length - bomb.length + j] !==
        bomb[j]
      ) {
        isBomb = false;
        break;
      }
    }
    if (isBomb) {
      stack.splice(stack.length - bomb.length);
    }
  }
}

if (stack.length === 0) {
  console.log('FRULA');
} else {
  console.log(stack.join(''));
}
