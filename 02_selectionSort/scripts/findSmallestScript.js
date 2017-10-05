import randomSequence from '../source/randomSequence';
import findSmallest from '../source/findSmallest';

const array = randomSequence(1, 10);
console.log("Sequence: " + array);
console.log("Index of smallest: " + findSmallest(array));
