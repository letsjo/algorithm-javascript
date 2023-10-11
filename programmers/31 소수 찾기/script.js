// 소수 찾기
// 문제 설명
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)

// 제한 조건
// n은 2이상 1000000이하의 자연수입니다.
// 입출력 예
// n	result
// 10	4
// 5	3
// 입출력 예 설명
// 입출력 예 #1
// 1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환

// 입출력 예 #2
// 1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환

n = 100;

console.log(solution(n));

function solution(n) {
    let answer = [];
    let numbers = [0,0];    // index와 숫자 위치를 맞추기 위함이고, 0과 1은 소수가 아니라서 
    // 초기 배열 생성
    for(let i = 2; i <= n; i++) {
        numbers.push(i);
    }

    console.log(numbers)
    // 2의 배수부터 한단계씩 올라가면서 모두 삭제시킴
    for(let i = 2; i<=n; i++){
        if (numbers[i]==0) continue;    // 이미 지워진 경우에는 바로 다음 배수로

        for (let j=2*i; j<=numbers.length; j+=i){   
            // 왜 j=2*i 이냐? 자기자신은 빼고 지워야하기 때문에 구구단 i단에서 ix2 부터 시작한다!
            numbers[j] = 0;
        }
        console.log(i,numbers)
    }

    for(let i = 2; i < numbers.length; i++){
        if(numbers[i]!=0) answer.push(numbers[i])
    }

    return answer.length
}

// 좋아요 많은 답안지

function solution_best(n) {
    const s = new Set();
    for(let i=1; i<=n; i+=2){
        s.add(i);
    }
    s.delete(1);
    s.add(2);
    for(let j=3; j<Math.sqrt(n); j++){
        if(s.has(j)){
             for(let k=j*2; k<=n; k+=j){    
                s.delete(k);
             }
        }
    }
    return s.size;
}