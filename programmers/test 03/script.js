function solution(queries) {
  const answer = queries.map((query) => {
    let count = 0;
    for (let i = 0; i < query.length / 2; i++) {
      if (query[i] !== query[query.length - 1 - i])
        count += Math.abs(query[query.length - 1 - i] - query[i])

      console.log(query[i], query[query.length - 1 - i], count)
    }

    return count % 2;
  })
  return answer;
}

console.log(solution([[1, 4, 3], [1, 2, 2]]));

// console.log(solution([[2, 0], [3, 1]]));

// console.log(solution([[0, 2, 0, 1], [0, 1, 0, 1]]));