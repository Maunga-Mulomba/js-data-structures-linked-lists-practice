const LinkedList = require("./linked-list.js");
const DoublyLinkedList = require("./doubly-linked-list.js");

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

let singlyList = new LinkedList();

// Adding head to singly list
let singlyHeadStart = Date.now();
for (let i = 0; i < 10000; i++) {
  singlyList.addToHead(5);
}
let singlyHeadEnd = Date.now();

console.log(`Add head to singly list ${singlyHeadEnd - singlyHeadStart} ms`);

console.log("");

let singlyTailStart = Date.now();

// Adding tail to singly list
for (let i = 0; i < 10000; i++) {
  singlyList.addToTail(5);
}
let singlyTailEnd = Date.now();

console.log(`Add Tail to singly list ${singlyTailEnd - singlyTailStart} ms`);

console.log("----------------------------------------");
let doubleList = new DoublyLinkedList();

// Adding head to double list

let doubleHeadStart = Date.now();
for (let i = 0; i < 10000; i++) {
  doubleList.addToHead(5);
}
let doubleHeadEnd = Date.now();

console.log(`Add head to double list ${doubleHeadEnd - doubleHeadStart} ms`);

console.log("");

let doubleTailStart = Date.now();

// Adding tail to double list
for (let i = 0; i < 10000; i++) {
  doubleList.addToTail(5);
}
let doubleTailEnd = Date.now();

console.log(`Add Tail to double list ${doubleTailEnd - doubleTailStart} ms`);

/* THESE WERE THE AVERAGE RESULTS

Add head to singly list: 5 ms

Add Tail to singly list: 677 ms
----------------------------------------
Add head to double list: 3 ms

Add Tail to double list: 7 ms

*/
