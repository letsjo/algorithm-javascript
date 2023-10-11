// 별 찍기 - 10
// https://www.acmicpc.net/problem/2447

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\r\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n');

const n = Number(input[0]);

const result = Array.from(Array(n), () => Array(n).fill(' '));

const draw = (x, y, n) => {
  if (n === 1) {
    result[x][y] = '*';
    return;
  }

  const div = parseInt(n / 3);

  for (let i = 0; i < 3; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      if (i === 1 && j === 1) {
        continue;
      }
      draw(x + i * div, y + j * div, div);
    }
  }
};

draw(0, 0, n);

console.log(result.map((row) => row.join('')).join('\n'));
