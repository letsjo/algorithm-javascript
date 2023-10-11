/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  return convertNumber(s) === convertNumber(t)
};

var convertNumber = (string) => {
  const stringMap = new Map();
  const result = [];
  let count = 0;
  string.split('').forEach(letter => {
    if (!stringMap.get(letter)) {
      count += 1;
      stringMap.set(letter, count);
      result.push(count);
    } else {
      result.push(stringMap.get(letter));
    }
  });
  return result.join('');
}

console.log(isIsomorphic("bbbaaaba", "aaabbbba"));