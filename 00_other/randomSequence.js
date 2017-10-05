import compareRandom from './compareRandom';
import sequence from './sequence';

export default (start, end) => {
    return sequence(start, end).sort(compareRandom);
}
