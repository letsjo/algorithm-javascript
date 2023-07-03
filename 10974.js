// 모든 순열
// https://www.acmicpc.net/problem/10974

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\r\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n');

let n = Number(input[0]);

const answer = [];
const visited = Array.from(
  { length: n },
  () => false,
);

const dfs = (count) => {
  if (count === n) {
    console.log(answer.join(' '));
    return;
  }

  for (let i = 0; i < n; i += 1) {
    if (!visited[i]) {
      visited[i] = true;
      answer.push(i + 1);
      dfs(count + 1);
      answer.pop();
      visited[i] = false;
    }
  }
};

dfs(0);
