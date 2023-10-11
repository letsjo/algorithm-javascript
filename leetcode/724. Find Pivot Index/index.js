/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let rightSum = nums.reduce((acc, num) => acc + num, 0)
  let leftSum = 0
  for (let i = 0; i < nums.length; i += 1) {
    leftSum += (nums[i - 1] || 0)
    rightSum -= nums[i]
    if (leftSum === rightSum) {
      return i
    }
  }
  return -1
};

console.log(object);