/*
Write a function called sumZero which acceptsasorted
array of integers.The function should find the first pair
where the sum is 0. Return an array that includes both
values that sum to zero or undefined ifapair does not exist
*/

//naive
export function sumZeroNaive(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
// O(n^2)
// O(1)

export function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
//O(n)
//O(1)
// sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);

/**
Implement a function called countUniqueValues,
which accepts a sorted array,and counts the
unique values in the array.There can be negative
numbers in the array,but it will always be sorted.
 */

export function countUniqueValues(arr) {
  return [...new Set(arr)].length;
}
//O(n)
//O(1)

export function countUniqueValues1(arr) {
  if (arr.length === 0) return 0;
  let first = 0,
    last = 1;
  while (last < arr.length) {
    if (arr[first] !== arr[last]) {
      first++;
      arr[first] = arr[last];
    }
    last++;
  }

  return first + 1;
}
//O(n)
//O(1)

export function areThereDuplicates2(...args) {
  args.sort(); //O(n)
  let start = 0;
  let end = 1;

  while (end < args.length) {
    if (args[start] === args[end]) return true;
    start++;
    end++;
  }
  return false;
}
//O(n)
//O(1)

/**
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where
the average of the pair equals the target average. There may be more than one pair that matches the average target.
 */

export function averagePair(arr, targetAvg) {
  if (arr.length === 0) return false;

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let currAvg = (arr[start] + arr[end]) / 2;

    if (currAvg === targetAvg) return true;
    else if (currAvg > targetAvg) end--;
    else start++;
  }

  return false;
}
//O(n)
//O(1)

// averagePair ([1,2, 3],2.5) // true
// averagePair ([1,3,3,5,6,7, 10, 12, 19], 8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

/**
Write a function called isSubsequence which takes in twO strings and checks whether the characters in the first string form a subsequence of
the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the
second string, without their order changing.
 */

function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}
//O(n)
//O(1)

//recursive
function isSubsequence2(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}
