function solution(babbling) {
    const speechs = ["aya", "ye", "woo", "ma"];
    let answer = 0;

    babbling.forEach((word) => {
        for (let i = 0; i < speechs.length; i += 1) {
            if (!word.includes(speechs[i] + speechs[i])) {
                word = word.replaceAll(speechs[i], ' ');
            }
        }
        if (word.trim() === '') answer += 1;
    })
    return answer;
}