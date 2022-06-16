export function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;
  let maxSum = 0; //-Infinity in case of negative numbers
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
// O(n)
// O(1)

/** 
 Sliding Window minSubArrayLen
Write a function called minSubArrayLen which accepts two parameters- an array of positive integers and a positive integer
This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the
function. If there isn't one, return O instead.
*/
export function minSubArrayLen(arr, num) {
  if (arr.length === 0) return 0;

  let minLen = 0;
  let left = 0,
    right = 0;
  let currSum = arr[left];

  while (right < arr.length && left <= right) {
    if (currSum >= num) {
      let currLen = right - left + 1;
      if (minLen === 0 || currLen < minLen) minLen = currLen;

      currSum -= arr[left];
      left++;
    } else {
      right++;
      currSum += arr[right];
    }
  }
  return minLen;
}

// minSubArrayLen([2,3,1,2,4,3], 7) // 3 3 5 9
// minSubArrayLen([2,1,6,5,4], 9) // 2 3 4 9
// minSubArrayLen([1,4,16, 22,5,7,8,9, 10], 3) //9 3 4 8 39

// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray

// minsubArrayLen ( |2,3,1,2,4,3], /),
// Decause [4,5] 1s tne smaliest subarray
// minSubArrayLen ([3, 1,7,11,2, 9,8, 21,62,33, 19], 52) //1-> because [62] is greater
