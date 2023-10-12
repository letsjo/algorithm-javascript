// 대체 경로
// https://level.goorm.io/exam/195701/%EB%8C%80%EC%B2%B4-%EA%B2%BD%EB%A1%9C/quiz/1

const solution = (input) => {
  const [N, M, S, E] = input[0].split(' ').map(Number);
  const roads = input.slice(1).map((value) => value.split(' ').map((n) => n - 1));
  const paths = Array.from(Array(N), () => new Array());
  const answer = [];

  for (let i = 0; i < roads.length; i += 1) {
    const [u, v] = roads[i];
    paths[u].push(v);
    paths[v].push(u);
  }

  for (let i = 0; i < N; i += 1) {
    if (S - 1 === i || E - 1 === i) {
      answer.push('-1');
      continue;
    }

    const queue = [[S - 1, 1]];
    const visited = Array(N).fill(false);
    visited[i] = true;
    visited[S - 1] = true;

    while (queue.length > 0) {
      const [curr, count] = queue.shift();

      if (E - 1 === curr) {
        answer.push(count + '');
        break;
      }

      paths[curr].forEach((next) => {
        if (!visited[next]) {
          visited[next] = true;
          queue.push([next, count + 1]);
        }
      });
    }

    if (answer.length === i) answer.push('-1');
  }

  return answer.join('\n');
};

const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
  input.push(line);
  // rl.close();
});

rl.on('close', () => {
  console.log(solution(input));
  process.exit();
});
