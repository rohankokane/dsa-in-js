export function selectionSort(arr) {
  const swap = (arr, indx1, indx2) => {
    [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
  };
  let lowest = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j;
      console.log(i, j, lowest, [...arr]);
    }
    if (i !== lowest) swap(arr, lowest, i);
  }
  return arr;
}
//O(n^2)

//when you want to minimize the no of swaps
// when you are worried about writing to memory
