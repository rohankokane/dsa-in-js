export function bubbleSort(arr) {
  function swap(indx1, indx2) {
    let temp = arr[indx1];
    arr[indx1] = arr[indx2];
    arr[indx2] = temp;
  }
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1);
        noSwaps = false;
      }
      console.log(i, j, [...arr]);
    }
    if (noSwaps) break;
  }

  return arr;
}
//optimize when array is nearly sorted
// O(n^2)
