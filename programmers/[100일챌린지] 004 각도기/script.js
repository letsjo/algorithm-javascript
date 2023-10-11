/**
 * ! [JavaScript 알고리즘 100일 챌린지]
 * https://www.youtube.com/playlist?list=PLkfUwwo13dlWZxOdbvMhkzhAowaiEjuGS
 * 
 * ! 문제
 * https://school.programmers.co.kr/learn/courses/30/lessons/120829
 */

// 내가 푼 정답

function solution(angle) {
    if (angle < 90) return 1;
    if (angle === 90) return 2;
    if (angle < 180) return 3;
    return 4;
}

console.log(solution(70));

// 추천 풀이

function recommend(angle) {
    if (angle < 90) {
        return 1
    } else if (angle === 90) {
        return 2
    } else if (angle < 180) {
        return 3
    } else {
        return 4
    }
}

console.log(recommend(91));


/**
 * ! 설명
 * 
 * 선두 if 조건문에서 먼저 조건에서 걸러지기 때문에
 * 90 < angle && angle < 180 과 같이 조건을 걸어둘 필요가 없다.
 * 
 */