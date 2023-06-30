// 8진수, 10진수, 16진수
// https://www.acmicpc.net/problem/11816

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split("\n");

if (input[0][0] === '0' && input[0][1] !== 'x') {
  console.log(parseInt(input[0], 8));
} else if (
  input[0][0] === '0' &&
  input[0][1] === 'x'
) {
  console.log(parseInt(input[0], 16));
} else {
  console.log(Number(input[0]));
}
