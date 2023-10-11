// 블랙잭
// https://www.acmicpc.net/problem/2798

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\r\n');
// let input = require('fs').readFileSync(0,{encoding: 'utf-8'}).split('\n');

let [n, m] = input[0].split(' ').map(Number);
const cards = input[1].split(' ').map(Number);

let max = 0;

for (let i = 0; i < n - 2; i++) {
  for (let j = i + 1; j < n - 1; j++) {
    for (let k = j + 1; k < n; k++) {
      let sum = cards[i] + cards[j] + cards[k];
      if (sum <= m && sum > max) {
        max = sum;
      }
    }
  }
}

console.log(max);
