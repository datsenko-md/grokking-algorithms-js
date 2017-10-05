export default (list, item) => {
    let low = 0;
    let high = list.length - 1;

    while (low <= high){
        let mid = Math.floor((low + high) / 2);
        let guess = list[mid];
        if (guess === item) {
            return mid;
        }
        if (guess > item) {
            high = mid - 1;
        }
        if (guess < item) {
            low = mid + 1;
        }
    }

    return null;
}
