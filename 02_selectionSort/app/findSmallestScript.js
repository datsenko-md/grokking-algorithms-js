import randomSequence from '../src/randomSequence';
import findSmallest from '../src/findSmallest';

const array = randomSequence(1, 10);
console.log("Sequence: " + array);
console.log("Index of smallest: " + findSmallest(array));
