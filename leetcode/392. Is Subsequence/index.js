/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  t = t.split('');
  return s.split('').every((letter) => {
    if (t.includes(letter)) {
      t.splice(0, t.indexOf(letter) + 1)
      return true
    }
    return false
  })
};

console.log(isSubsequence("aaaaaa", "bbaaaa"));

// var isSubsequence = function(s, t) {
//   let i = 0, j = 0;
//   while( j < t.length) {
//       if(s[i] === t[j]) {
//           i++;
//       }
//       j++;
//   }
//   return i === s.length ? true: false;
// };