import quickSort from '../source/quickSort';
import randomSequence from '../source/randomSequence';

const array = randomSequence(1, 10);
console.log("Sequence: " + array);
console.log("Sorted: " + quickSort(array));
