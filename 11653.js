// 소인수분해
// https://www.acmicpc.net/problem/11653

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split("\n").map(Number);

let n = input.shift();

solution(n);

function solution(number) {
  if (number == 1) return;

  divide = 2;
  while (number != 1) {
    if (number % divide == 0) {
      console.log(divide);
      number /= divide;
    } else {
      divide += 1;
    }
  }
}
