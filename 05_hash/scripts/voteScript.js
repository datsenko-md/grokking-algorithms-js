import checkVoter from '../source/vote';

let voted = {};

checkVoter("Mike", voted);
console.log(voted);
checkVoter("John", voted);
console.log(voted);
checkVoter("Mike", voted);
console.log(voted);
