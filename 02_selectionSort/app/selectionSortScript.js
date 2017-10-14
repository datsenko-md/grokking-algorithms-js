import selectionSort from '../src/selectionSort';
import randomSequence from '../src/randomSequence';

const array = randomSequence(1, 10);
console.log("Sequence: " + array);
console.log("Sorted: " + selectionSort(array));
