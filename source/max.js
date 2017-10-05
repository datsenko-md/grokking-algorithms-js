const max = (list) => {
    if (list.length === 1) {
        return list[0];
    }
    const head = list.shift();
    const tail = max(list);
    return head >= tail ? head : tail;
}

export default max;
