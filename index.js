// import { validAnagram2 } from "./ProblemSolving/frequencyCounter";
// import {
//   countUniqueValues,
//   countUniqueValues1,
//   sumZero
// } from "./ProblemSolving/mutilplePointer";
// import { maxSubarraySum } from "./ProblemSolving/slidingWindow";
// import { bubbleSort } from "./Sorting/bubbleSort";
// import { insertionSort } from "./Sorting/insertionSort";
// import { mergeSort } from "./Sorting/mergeSort";
// import { quickSort } from "./Sorting/quickSort";
// import { radixSort } from "./Sorting/radixSort";
// import { selectionSort } from "./Sorting/selectionSort";

import { DoublyLinkedList } from "./DataStructures/DoublyLinkedList";
import { SinglyLinkedList } from "./DataStructures/SinglyLinkedList";

// console.log(validAnagram2("anagram", "nagaram"));

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));

// console.log(countUniqueValues1([-3, -2, -1, 0, 1, 1, 1, 2]));

// console.log(maxSubarraySum([1, 1, 1, 2, 4, 5, 1, 2, 4, 9, 2], 3));

// console.log(bubbleSort([7, 1, 2, 3, 4, 5]));
// console.log(selectionSort([34, 22, 10, 19, 17]));
// console.log(insertionSort([8, 6, 5, 3, 1]));
// console.log(insertionSort([2, 3, 4, 5, 1]));

//
// console.log(mergeSort([9, 2, 8, 4, 5, 1]));
// console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
// console.log(radixSort([4, 8, 2964, 1, 56, 7, 63, 333]));

// let SLL = new SinglyLinkedList();
// console.log(SLL.push(4));
// console.log(SLL.push(6));
// console.log(SLL.push(8));
// console.log(SLL.shift());
// console.log(SLL.shift());
// console.log(SLL.shift());
// console.log(SLL.unshift("add me"));
// console.log(SLL.get(3));
// console.log(SLL.set(0, 9));
// console.log(SLL.insert(1, "first"));
// console.log(SLL.insert(0, "zrero"));
// console.log(SLL.set(2, "seven"));
// console.log(SLL.reverse());
// console.log(SLL);

let DLL = new DoublyLinkedList();
DLL.push("Harry");
DLL.push("Ron");
DLL.push("Hermione");
console.log(DLL);
DLL.remove(1);
console.log(DLL);
