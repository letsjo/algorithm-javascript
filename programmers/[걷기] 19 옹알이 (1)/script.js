function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"];
    let answer = 0;

    babbling.forEach((babyWord) => {
        words.forEach((word) => {
            babyWord = babyWord.replaceAll(word, ' ');
        })
        if (babyWord.trim() === "") {
            answer += 1;
        }
    });

    return answer;
}