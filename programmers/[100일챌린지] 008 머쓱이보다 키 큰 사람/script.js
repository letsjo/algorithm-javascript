/**
 * ! [JavaScript 알고리즘 100일 챌린지]
 * https://www.youtube.com/playlist?list=PLkfUwwo13dlWZxOdbvMhkzhAowaiEjuGS
 * 
 * ! 문제
 * https://school.programmers.co.kr/learn/courses/30/lessons/120585
 */

// 내가 푼 정답

function solution(array, height) {
    return array.filter((friendHeight) => friendHeight > height).length;
}

console.log(solution([149, 180, 192, 170], 167));

// 추천 풀이

function recommend(array, height) {
    let answer = 0;
    for (i of array) {
        if (i > height) {
            answer += 1;
        }
    }
    return answer;
}

console.log(recommend([149, 180, 192, 170], 167));

function recommend_2(array, height) {
    return array.filter(v => v > height).length;
}


/**
 * ! 설명
 * 
 */