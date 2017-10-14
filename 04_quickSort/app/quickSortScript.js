import quickSort from '../src/quickSort';
import randomSequence from '../../00_other/randomSequence';

const array = randomSequence(1, 10);
console.log("Sequence: " + array);
console.log("Sorted: " + quickSort(array));
