/**
 * ! [JavaScript 알고리즘 100일 챌린지]
 * https://www.youtube.com/playlist?list=PLkfUwwo13dlWZxOdbvMhkzhAowaiEjuGS
 * 
 * ! 문제
 * https://school.programmers.co.kr/learn/courses/30/lessons/120809
 */

// 내가 푼 정답

function solution(numbers) {
    return numbers.map(number => number * 2);
}

console.log(solution([1, 2, 100, -99, 1, 2, 3]));

// 추천 풀이

function recommend(numbers) {
    return numbers.map(v => v * 2);;
}

console.log(recommend([1, 2, 100, -99, 1, 2, 3]));

/**
 * ! 설명
 * 
 */