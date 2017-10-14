const sum = (array) => {
    if (array.length <= 1) {
        return array[0];
    }

    return array.shift() + sum(array);
}

export default sum;
