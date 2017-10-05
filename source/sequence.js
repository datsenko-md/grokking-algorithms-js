export default (start, end) => {
    if (start > end) {
        return [];
    }

    let result = [];
    for (let i = start; i <= end; i += 1) {
        result.push(i);
    }

    return result;
}
