// 치킨 배달
// https://www.acmicpc.net/problem/15686

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .toString()
  .trim()
  .split('\r\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const board = input.slice(1).map((el) => el.split(' ').map(Number));
const chicken = [];

// 치킨집 위치 찾기
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // 치킨집이라면
    if (board[i][j] === 2) {
      chicken.push([i, j]);
    }
  }
}

/**
 * 집과 치킨집의 거리를 구하는 함수
 * @param {[number, number]} a : 집의 위치
 * @param {[number, number]} b : 치킨집의 위치
 * @returns {number} : 집과 치킨집의 거리
 */
const getDistance = (a, b) => {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
};

/**
 * 조합을 구하는 함수
 * @param {number} n : 전체 개수
 * @param {number} r : 뽑을 개수
 * @returns {number[][]} : 조합의 결과
 */
const getCombination = (n, r) => {
  const result = [];
  const temp = [];
  const visited = Array(n).fill(false);

  // 조합 구하기
  const combination = (count, start) => {
    if (count === r) {
      result.push([...temp]);
      return;
    }

    for (let i = start; i < n; i++) {
      if (!visited[i]) {
        visited[i] = true;
        temp.push(i);
        combination(count + 1, i + 1);
        temp.pop();
        visited[i] = false;
      }
    }
  };

  combination(0, 0);
  return result;
};

// 치킨집 중에서 m개를 뽑는 조합
const combinations = getCombination(chicken.length, m);
// answer 초기화 (무한대값 넣기)
let answer = Infinity;

// 치킨 거리의 최솟값 구하기
// 조합의 개수만큼 반복
for (let i = 0; i < combinations.length; i++) {
  const combination = combinations[i];
  let sum = 0;
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) {
      // 집이라면, 치킨집과의 거리를 구해서 더하기
      if (board[j][k] === 1) {
        let min = Infinity;
        // 치킨집과의 거리 중에서 최솟값 구하기
        for (let l = 0; l < combination.length; l++) {
          min = Math.min(min, getDistance([j, k], chicken[combination[l]]));
        }
        sum += min;
      }
    }
  }
  answer = Math.min(answer, sum);
}

console.log(answer);
