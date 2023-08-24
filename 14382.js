// 숫자세는 양 (Large)
// https://www.acmicpc.net/problem/14382

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .toString()
  .trim()
  .split('\r\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const t = Number(input[0]);

for (let i = 1; i <= t; i++) {
  let n = Number(input[i]);
  let answer = 0;
  let numbers = new Set();

  if (n === 0) {
    console.log(`Case #${i}: INSOMNIA`);
    continue;
  }

  for (let j = 1; j <= 100; j++) {
    answer = n * j;
    let num = answer;

    while (num > 0) {
      numbers.add(num % 10);
      num = Math.floor(num / 10);
    }

    if (numbers.size === 10) {
      console.log(`Case #${i}: ${answer}`);
      break;
    }
  }

  if (numbers.size !== 10) {
    console.log(`Case #${i}: INSOMNIA`);
  }

  numbers.clear();
}
