// 부등호
// https://www.acmicpc.net/problem/2529

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .toString()
  .trim()
  .split('\r\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const k = Number(input[0]);
const signs = input[1].split(' ');

const result = [];

const visited = new Array(10).fill(false);

const check = (a, b, sign) => {
  if (sign === '<') {
    return a < b;
  } else {
    return a > b;
  }
};

const dfs = (count, num) => {
  if (count === k + 1) {
    result.push(num);
    return;
  }

  for (let i = 0; i < 10; i++) {
    if (!visited[i] && (count === 0 || check(num[count - 1], i, signs[count - 1]))) {
      visited[i] = true;
      dfs(count + 1, num + String(i));
      visited[i] = false;
    }
  }
};

dfs(0, '');

console.log(result[result.length - 1]);
console.log(result[0]);
