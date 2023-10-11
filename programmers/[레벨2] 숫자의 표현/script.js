function solution(n) {
    let answer = 0;

    for(let i = 0; i <= n; i++){
        let sum = 0;
        for(let j = i+1; j <= n; j++){
            sum += j;
            if (n === sum) answer += 1;
            if (n < sum) break;
        }
    }
    
    return answer;
}

console.log(solution(15));