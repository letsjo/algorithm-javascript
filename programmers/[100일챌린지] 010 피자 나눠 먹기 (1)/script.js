/**
 * ! [JavaScript 알고리즘 100일 챌린지]
 * https://www.youtube.com/playlist?list=PLkfUwwo13dlWZxOdbvMhkzhAowaiEjuGS
 * 
 * ! 문제
 * https://school.programmers.co.kr/learn/courses/30/lessons/120583
 */

// 내가 푼 정답

function solution(n) {
    return Math.ceil(n / 7);
}

console.log(solution(7));

// 추천 풀이

function recommend(n) {
    if (n / 7 == ~~(n / 7)) {
        return n / 7;
    }
    return ~~(n / 7) + 1;
}

console.log(recommend(7));

/**
 * ! 설명
 * 
 * Math.ceil(n) : 올림
 * Math.floor(n) : 내림
 * ~~(n) : 내림
 * ~(n) = -(n+1)
 * Math.round(n) : 반올림
 * 
 */