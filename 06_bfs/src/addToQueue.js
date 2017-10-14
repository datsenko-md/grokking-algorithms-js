export default (list, queue) => {
    for (let i = 0; i < list.length; i += 1) {
        queue.push(list[i]);
    }
    return queue;
}
