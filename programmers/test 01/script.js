function solution(lotteries) {
  let answer = 0;
  let goodRate = [0, 0];
  let lotteriesRate = lotteries.map((lottery) => {
    if (lottery[0] / (lottery[1] + 1) >= 1)
      return [1, lottery[2]];
    return [lottery[0] / (lottery[1] + 1), lottery[2]];
  })
  lotteriesRate.forEach((lotteryRate, index) => {
    if (lotteryRate[0] > goodRate[0] || (lotteryRate[0] === goodRate[0] && lotteryRate[1] > goodRate[1])) {
      answer = index + 1;
      return goodRate = lotteryRate;
    }
  })
  return answer;
}

console.log(solution([[10, 19, 800], [20, 39, 200], [100, 199, 500]]));
// console.log(solution([[10, 19, 800], [20, 39, 200], [100, 199, 500]]));
// console.log(solution([[50, 1, 50]]));