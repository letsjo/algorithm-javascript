let input = require("fs")
  .readFileSync(__dirname + "/input.txt", { encoding: "utf-8" })
  .split("\n");
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split("\n");

for (let i = 1; i <= input[0]; i++) {
  let [height, width, number] = input[i].split(" ").map(Number);
  let floor = number % height == 0 ? height + "" : number % height + "";
  let roomNumber = Math.ceil(number / height) + ""
  console.log(floor + (roomNumber.length == 1 ? "0" + roomNumber : roomNumber));
}