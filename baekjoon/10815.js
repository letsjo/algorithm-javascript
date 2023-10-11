// 숫자 카드
// https://www.acmicpc.net/problem/10815

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\r\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n');

const n = Number(input[0]);
const cards = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const m = Number(input[2]);
const targets = input[3].split(' ').map(Number);

const answer = [];

for (let i = 0; i < m; i += 1) {
  let start = 0;
  let end = cards.length - 1;
  let flag = false;

  while (start <= end) {
    const mid = parseInt((start + end) / 2);
    if (targets[i] === cards[mid]) {
      flag = true;
      break;
    } else if (targets[i] > cards[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  if (flag) answer.push(1);
  else answer.push(0);
}

console.log(answer.join(' '));
