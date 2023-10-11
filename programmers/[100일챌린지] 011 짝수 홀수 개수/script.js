/**
 * ! [JavaScript 알고리즘 100일 챌린지]
 * https://www.youtube.com/playlist?list=PLkfUwwo13dlWZxOdbvMhkzhAowaiEjuGS
 * 
 * ! 문제
 * https://school.programmers.co.kr/learn/courses/30/lessons/120824
 */

// 내가 푼 정답

function solution(num_list) {
    const answer = [0, 0]
    num_list.forEach((value) => answer[value % 2] += 1)
    return answer
}

console.log(solution([1, 2, 3, 4, 5]));

// 추천 풀이

function recommend(num_list) {
    var answer = [0, 0];
    for (item of num_list) {
        answer[item % 2] += 1;
    }
    return answer;
}

console.log(recommend([1, 2, 3, 4, 5]));

/**
 * ! 설명
 * 
 * 
 */