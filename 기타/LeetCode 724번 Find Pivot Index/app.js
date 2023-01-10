/**
 * @param {number[]} nums
 * @return {number}
 */

var pivotIndex = function (nums) {
  // 1. 전체 배열의 합계를 구한다. (rightSum)
  // 2. 배열을 인덱스 -1 부터 1씩 증가시키면서, 대상 인덱스를 제외시킨다.
  // 3. 왼쪽 합계(leftSum)은 더하고, 오른쪽 합계(rightSum)은 뺀다.
  // 4. 그리고 왼쪽 합계(leftSum)와 오른쪽 합계(rightSum)를 비교시킨다.
  // 5. 값이 같으면 i 반환 (종료)
  // 6. 값이 다르면 nums 길이 만큼 반복
  // 7. nums의 마지막 인덱스까지 다 돌았는데, 답이 없으면 -1 반환 (종료)

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

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));