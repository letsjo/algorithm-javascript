// 분해합
// https://www.acmicpc.net/problem/2231

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\r\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n');

let N = Number(input[0]);

let answer = 0;

for (let i = 1; i < N; i += 1) {
  let sum = i;
  let num = i;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  if (sum === N) {
    answer = i;
    break;
  }
}

console.log(answer);
