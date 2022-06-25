export function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, indx1, indx2) {
    let temp = array[indx1];
    array[indx1] = array[indx2];
    array[indx2] = temp;
  }
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
    console.log([...arr]);
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

export function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return arr;

  let pivotIdx = pivot(arr, left, right);
  //left
  quickSort(arr, left, pivotIdx - 1);
  //right
  quickSort(arr, pivotIdx + 1, right);

  return arr;
}
