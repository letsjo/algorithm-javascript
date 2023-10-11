
function solution(k, score) {
    let scoreList = [];
    const answer = [];
    score.forEach((point) => {
        scoreList.push(point);
        scoreList = scoreList.sort((a, b) => b - a).slice(0, k);
        answer.push(scoreList[scoreList.length - 1]);
    })
    return answer;
}