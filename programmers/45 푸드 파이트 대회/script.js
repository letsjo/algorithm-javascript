function solution(food) {
    let answer = '0';
    for (let i = food.length - 1; i >= 1; i -= 1) {
        const count = parseInt(food[i] / 2);
        const str = ''+i;
        answer = str.repeat(count) + answer + str.repeat(count);
    }
    return answer;
}

console.log(solution([1, 3, 4, 6]));