let input = require("fs")
  .readFileSync(__dirname + "/input.txt", { encoding: "utf-8" })
  .split("\n");
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split("\n");

const transmission = input[0].split(' ');

let direction = transmission[0] === '1' ? 'ascending' : 'descending';

for (let i = 0; i < transmission.length - 1; i++) {
  if (Math.abs(transmission[i] - transmission[i + 1]) !== 1) {
    direction = 'mixed';
    break;
  }
}

console.log(direction);