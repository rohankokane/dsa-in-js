export function binarySearch(arr, num) {
  if (arr.length === 0) return -1;

  let left = 0,
    right = arr.length - 1,
    middle;

  while (left <= right) {
    middle = Math.floor((right + left) / 2);
    if (arr[middle] === num) return middle;
    if (arr[middle] > num) right = middle - 1;
    else left = middle + 1;
  }
  return -1;
}
// O(log n)
