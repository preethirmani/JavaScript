/**Rotate Array K steps 
 * 
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 * Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

*/

function rightRotate(nums, k) {
  let n = nums.length;
   k = k % n;
   reverse(nums, 0, n-1);
   reverse(nums, 0, k-1);
   reverse(nums, k, n-1);
   return nums;
}

function leftRotate(nums, k) {
  let n = nums.length;
  k = k % n;
  reverse(nums, 0 , n-1);
  reverse(nums, 0, n-k-1);
  reverse(nums,n-k, n-1);
  return nums;
}
function reverse(nums, start, end) {
  while(start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
  return nums;
}

console.log(rightRotate([1,2,3,4,5,6,7],3));
console.log(leftRotate([1,2,3,4,5,6,7,8], 3));
