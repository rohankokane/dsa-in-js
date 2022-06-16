// check if square vals of arr1 into arr2
//naive appr
export function sameNaive(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}
// O(n^2)
//O(1)

// [1,2,3,2],[9,1,4,4]]I

export function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  // console.log(frequencyCounter1)]
  return true;
}
// O(3n)
// O(2n)

// same([1,2,3,2],[9,1,4,4])

export function validAnagram1(str1, str2) {
  if (str1.length !== str2.length) return false;
  let freqObj1 = {};
  let freqObj2 = {};
  for (let char of str1) {
    freqObj1[char] = ++freqObj1[char] || 1;
  }
  for (let char of str2) {
    freqObj2[char] = ++freqObj2[char] || 1;
  }

  for (let char in freqObj1) {
    if (!(char in freqObj2)) return false;
    if (!(freqObj1[char] === freqObj2[char])) return false;
  }

  return true;
}
// time - O(n)
// space - O(2n)

export function validAnagram2(str1, str2) {
  if (str1.length !== str2.length) return false;
  let lookup = {};
  for (let char of str1) {
    lookup[char] = ++lookup[char] || 1;
  }
  for (let char of str2) {
    if (!lookup[char]) return false;
    else --lookup[char];
  }
  return true;
}
// time - O(n)
// space - O(n)

//avoided nested loops
//any time we need compare multiple datas anagrams, arrays of numbers

export function areThereDuplicates() {
  if (arguments.length === 0) return false;
  let lookup = {};
  for (let val of arguments) {
    lookup[val] = ++lookup[val] || 1;
    if (lookup[val] > 1) return true;
  }
  return false;
}
//O(n)
//O(n)

// areThereDuplicates(1,2,3)// false
// areThereDuplicates(1,2,2)// true
// areThereDuplicates('a','b','c','a')// true
