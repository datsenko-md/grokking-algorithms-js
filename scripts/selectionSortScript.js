import selectionSort from '../source/selectionSort';
import randomSequence from '../source/randomSequence';

const array = randomSequence(1, 10);
console.log("Sequence: " + array);
console.log("Sorted: " + selectionSort(array));
