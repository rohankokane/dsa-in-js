export function validAnagram(str1, str2) {
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
