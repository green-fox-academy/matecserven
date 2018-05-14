'use strict';
export{}

// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

const numList: number[] = [3, 4, 5, 6, 7];

let revList1: number[] = numList.concat([]).reverse();

let revlist2: number[] = [];
for(let i: number = 0; i < numList.length;i++) {
  revlist2.push(numList[numList.length - i -1]);
}

console.log(revList1);
console.log(revlist2);