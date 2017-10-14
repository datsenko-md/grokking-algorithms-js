export default (arr) => {
    let smallest = arr[0];
    let smallestIndex = 0;

    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }

    return smallestIndex;
}
