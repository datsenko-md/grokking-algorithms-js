import sequence from '../src/sequence';
import binarySearch from '../src/binarySearch';

const list = sequence(1, 10);
const item = 3;

console.log("Item: " + item);
console.log("Sequence: " + list);
console.log("Index of item: " + binarySearch(list, item));
