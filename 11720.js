// 숫자의 합
// https://www.acmicpc.net/problem/11720

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\r\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n');

let numbers = input[1].split('').map(Number);

console.log(numbers.reduce((a, b) => a + b));
