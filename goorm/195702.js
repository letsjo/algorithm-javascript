// 연결 요소 제거하기
// https://level.goorm.io/exam/195702/%EC%97%B0%EA%B2%B0-%EC%9A%94%EC%86%8C-%EC%A0%9C%EA%B1%B0%ED%95%98%EA%B8%B0/quiz/1

const solution = (input) => {
  const [N, K, Q] = input[0].split(' ').map(Number);
  let board = input.slice(1, N + 1).map((val) => [...val]);
  const orders = input.splice(N + 1, Q).map((val) => val.split(' '));

  for (let i = 0; i < Q; i += 1) {
    const [x, y, d] = orders[i];
    const positionX = +x - 1;
    const positionY = +y - 1;

    board[positionX][positionY] = d;

    const stack = [[positionX, positionY]];
    const update = [[positionX, positionY]];
    const visited = Array.from(Array(N), () => Array(N).fill(true));

    visited[positionX][positionY] = false;

    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    while (stack.length > 0) {
      const [x, y] = stack.pop();

      for (let i = 0; i < 4; i += 1) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (0 <= nx && nx < N && 0 <= ny && ny < N && board[nx][ny] === d && visited[nx][ny]) {
          visited[nx][ny] = false;
          update.push([nx, ny]);
          stack.push([nx, ny]);
        }
      }
    }
    if (update.length >= K) {
      update.forEach(([x, y]) => (board[x][y] = '.'));
    }
  }
  return board.map((val) => val.join('')).join('\n');
};

const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
});

rl.on('close', () => {
  console.log(solution(input));
  process.exit();
});
