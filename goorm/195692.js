// GameJam
// https://level.goorm.io/exam/195692/gamejam/quiz/1

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

function solution(input) {
  const N = Number(input[0]);
  const goormPositon = input[1].split(' ').map((val) => val - 1);
  const playerPosition = input[2].split(' ').map((val) => val - 1);
  const commendBoard = input.slice(3).map((val) => val.split(' '));

  const countMovingGoorm = playGame(N, commendBoard, goormPositon);
  const countMovingPlayer = playGame(N, commendBoard, playerPosition);

  return countMovingGoorm > countMovingPlayer
    ? `goorm ${countMovingGoorm}`
    : `player ${countMovingPlayer}`;
}

function playGame(N, board, position) {
  const visited = Array.from({ length: N }, () => Array(N).fill(0));
  const direction = {
    U: [-1, 0],
    D: [1, 0],
    L: [0, -1],
    R: [0, 1],
  };

  let [x, y] = position;

  let flag = true;

  while (flag) {
    const len = board[x][y].length - 1;
    const count = Number(board[x][y].substring(0, len));
    const command = board[x][y].substring(len);

    const [tx, ty] = direction[command];

    for (let i = 0; i < count; i++) {
      if (visited[x][y] === 1) {
        flag = false;
        break;
      }

      visited[x][y] = 1;

      x += tx;
      y += ty;

      if (x < 0) x = N - 1;
      if (x === N) x = 0;
      if (y < 0) y = N - 1;
      if (y === N) y = 0;
    }
  }

  return visited.flat().filter((n) => n === 1).length;
}
