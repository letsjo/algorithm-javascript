// 로또
// https://www.acmicpc.net/problem/6603

const input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\r\n');
// const input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n');

for (let i = 0; i < input.length - 1; i += 1) {
  const testCase = input[i].split(' ').map(Number);
  if (input[0] === 0) break;

  const answer = [];
  const visited = Array.from({ length: testCase[0] + 1 }, () => false);

  const dfs = (index, count) => {
    if (count === 6) {
      console.log(answer.join(' '));
      return;
    }

    for (let i = index; i <= testCase[0]; i += 1) {
      if (!visited[i]) {
        visited[i] = true;
        answer.push(testCase[i]);
        dfs(i, count + 1);
        answer.pop();
        visited[i] = false;
      }
    }
  };

  dfs(1, 0);
  console.log();
}
