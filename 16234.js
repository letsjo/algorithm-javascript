// 인구 이동
// https://www.acmicpc.net/problem/16234

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .toString()
  .trim()
  .split('\r\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, l, r] = input[0].split(' ').map(Number);
const board = input.slice(1).map((el) => el.split(' ').map(Number));
let visited = Array.from(Array(n), () => Array(n).fill(0));
let united = [];

const dx = [0, -1, 0, 1];
const dy = [1, 0, -1, 0];

/**
 * 연합을 찾고, 연합의 각 칸의 인구 수를 구하는 함수
 * @param {number} x : 행
 * @param {number} y : 열
 * @param {number} union : 연합 번호
 * @returns {number} : 각 연합의 이동 후 인구 수
 */
const getPopulationByUnion = (x, y, union) => {
  const stack = [[x, y]];
  united = [[x, y]];
  let sum = board[x][y];
  visited[x][y] = union;

  while (stack.length > 0) {
    const [x, y] = stack.pop();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 범위를 벗어나지 않고, 방문하지 않았다면?
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && visited[nx][ny] === 0) {
        const diff = Math.abs(board[x][y] - board[nx][ny]);
        // 인구 차이가 범위 내라면
        if (diff >= l && diff <= r) {
          visited[nx][ny] = union;
          stack.push([nx, ny]);
          united.push([nx, ny]);
          sum += board[nx][ny];
        }
      }
    }
  }

  // 연합의 인구 수
  return Math.floor(sum / united.length);
};

let count = 0;
while (true) {
  let union = 0;
  visited = Array.from(Array(n), () => Array(n).fill(0));

  // 연합 구하기
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 방문하지 않았다면,
      if (visited[i][j] === 0) {
        union++;
        united = [];
        const population = getPopulationByUnion(i, j, union);
        // 연합의 인구 이동
        for (let k = 0; k < united.length; k++) {
          const [x, y] = united[k];
          board[x][y] = population;
        }
      }
    }
  }

  // 인구 이동이 없다면
  if (union === n * n) {
    break;
  }
  count++;
}

console.log(count);
