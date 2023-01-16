let input = require("fs")
  .readFileSync(__dirname + "/input.txt", { encoding: "utf-8" })
  .split("\n");
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split("\n");

const info = input[0].split(' ');
let W = info[0];
const N = info[1];
const jewels = [];

for (let i = 1; i <= N; i++) {
  const jewel_info = input[i].split(' ').map(Number);
  jewels[i - 1] = { weight: jewel_info[0], price: jewel_info[1] }
}

jewels.sort((a, b) => {
  return b.price - a.price;
})

let answer = 0;
jewels.every((jewel_info) => {
  if (W >= jewel_info.weight) {
    answer += jewel_info.weight * jewel_info.price;
    W -= jewel_info.weight;
    return true;
  } else {
    answer += W * jewel_info.price;
    return false;
  }
})

console.log(answer);