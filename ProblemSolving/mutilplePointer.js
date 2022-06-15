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
