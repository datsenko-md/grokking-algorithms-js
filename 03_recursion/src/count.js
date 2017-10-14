const count = (list) => {
    if (list.length === 0) {
        return 0;
    }
    list.shift();
    return 1 + count(list);
}

export default count;
