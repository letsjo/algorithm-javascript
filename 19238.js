// 스타트 택시
// https://www.acmicpc.net/problem/19238

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .toString()
  .trim()
  .split('\r\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m, fuel] = input[0].split(' ').map(Number);
const board = input.slice(1, n + 1).map((el) => el.split(' ').map(Number));
const [taxiX, taxiY] = input[n + 1].split(' ').map((el) => Number(el) - 1);
const passengersList = [];

for (let i = n + 2; i < n + 2 + m; i++) {
  passengersList.push(input[i].split(' ').map(Number));
  board[passengersList[i - n - 2][0] - 1][passengersList[i - n - 2][1] - 1] = 2;
}

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const findPassenger = (taxiX, taxiY) => {
  const queue = [[taxiX, taxiY, 0]];
  const visited = Array.from(Array(n), () => Array(n).fill(false));
  const passengers = [];

  while (queue.length > 0) {
    const [x, y, distance] = queue.shift();
    if (board[x][y] > 1) {
      passengers.push([x, y, distance]);
      visited[x][y] = true;
    }
    for (let j = 0; j < 4; j++) {
      const nx = x + dx[j];
      const ny = y + dy[j];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && !visited[nx][ny] && board[nx][ny] !== 1) {
        queue.push([nx, ny, distance + 1]);
        visited[nx][ny] = true;
      }
    }
  }

  passengers.sort((a, b) => {
    if (a[2] === b[2]) {
      if (a[0] === b[0]) {
        return a[1] - b[1];
      }
      return a[0] - b[0];
    }
    return a[2] - b[2];
  });
  return passengers[0] || [];
};

const findDestination = (passengerX, passengerY, destinationX, destinationY) => {
  const queue = [[passengerX, passengerY, 0]];
  const visited = Array.from(Array(n), () => Array(n).fill(false));
  visited[passengerX][passengerY] = true;

  while (queue.length > 0) {
    const [x, y, distance] = queue.shift();
    for (let j = 0; j < 4; j++) {
      const nx = x + dx[j];
      const ny = y + dy[j];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && !visited[nx][ny] && board[nx][ny] !== 1) {
        if (nx === destinationX && ny === destinationY) {
          return distance + 1;
        }
        queue.push([nx, ny, distance + 1]);
        visited[nx][ny] = true;
      }
    }
  }
  return -1;
};

let answer = 0;
let currentFuel = fuel;
let passengerCount = 0;
let currentX = taxiX;
let currentY = taxiY;

while (passengerCount < m) {
  const passengers = findPassenger(currentX, currentY);
  if (passengers.length === 0) {
    answer = -1;
    break;
  }

  const [passengerX, passengerY, distance] = passengers;
  board[passengerX][passengerY] = 0;

  if (currentFuel - distance < 0) {
    answer = -1;
    break;
  }
  currentFuel -= distance;

  const destination = passengersList.find((passenger, idx) => {
    if (passenger[0] === passengerX + 1 && passenger[1] === passengerY + 1) {
      return passengersList.splice(idx, 1);
    }
  });

  const destinationDistance = findDestination(
    passengerX,
    passengerY,
    destination[2] - 1,
    destination[3] - 1,
  );
  if (destinationDistance === -1) {
    answer = -1;
    break;
  }

  if (currentFuel - destinationDistance < 0) {
    answer = -1;
    break;
  }
  currentFuel += destinationDistance;
  passengerCount += 1;
  currentX = destination[2] - 1;
  currentY = destination[3] - 1;
}

console.log(answer === -1 ? -1 : currentFuel);
