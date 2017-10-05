import findSmallest from '../../00_other/findSmallest';

export default (array) => {
    let size = array.length;
    let newArr = [];
    for (let i = 0; i < size; i += 1) {
        let smallest = findSmallest(array);
        newArr.push(array[smallest]);
        array.splice(smallest, 1);
    }

    return newArr;
}
