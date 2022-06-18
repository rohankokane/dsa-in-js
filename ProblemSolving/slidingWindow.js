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

  let minLen = Infinity;
  let left = 0,
    right = 0;
  let currSum = arr[left];

  while (right < arr.length && left <= right) {
    if (currSum >= num) {
      let currLen = right - left + 1;
      if (minLen === 0 || currLen < minLen) minLen = currLen;
      //Math.max
      currSum -= arr[left];
      left++;
    } else {
      right++;
      currSum += arr[right];
    }
  }
  return minLen;
}
//O(n)
//O(1)

// minSubArrayLen([2,3,1,2,4,3], 7) // 3 3 5 9
// minSubArrayLen([2,1,6,5,4], 9) // 2 3 4 9
// minSubArrayLen([1,4,16, 22,5,7,8,9, 10], 3) //9 3 4 8 39

// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray

// minsubArrayLen ( |2,3,1,2,4,3], /),
// Decause [4,5] 1s tne smaliest subarray
// minSubArrayLen ([3, 1,7,11,2, 9,8, 21,62,33, 19], 52) //1-> because [62] is greater

export function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

function findLongestSubstring1(str) {
  if (str.length === 0) return 0;

  let chars = new Map();
  let longest = 0;
  let left = 0;
  for (let right = 0; right < str.length; right++) {
    let char = str[right];
    if (chars.has(char)) {
      left = Math.max(left, chars.get(char));
    }
    let currLen = right - left + 1;
    longest = Math.max(currLen, longest);
    chars.set(str[right], right + 1);
  }
  return longest;
}
