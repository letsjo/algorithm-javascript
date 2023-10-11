// 히든 넘버
// https://www.acmicpc.net/problem/8595

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split("\n");

let str = input[1];
let sum = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] >= 0 && str[i] <= 9) {
    let num = '';
    while (str[i] >= 0 && str[i] <= 9) {
      num += str[i];
      i++;
    }
    sum += Number(num);
  }
}

console.log(sum);
