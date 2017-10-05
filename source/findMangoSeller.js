import addToQueue from './addToQueue';
import personIsSeller from './personIsSeller';

export default (searchQueue, graph, startPoint) => {
    searchQueue = addToQueue(graph[startPoint], searchQueue);
    let searched = [];

    while(searchQueue.length !== 0) {
        let person = searchQueue.shift();
        if (searched.indexOf(person) === -1) {
            if (personIsSeller(person)) {
                return person + " is a mango seller";
            } else {
                searchQueue = addToQueue(graph[person], searchQueue);
                searched.push(person);
            }
        }
    }

    return "nobody is a mango seller";
}
