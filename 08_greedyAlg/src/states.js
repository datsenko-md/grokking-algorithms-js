/*
Имплементация базовых операций над множествами взята отсюда:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
*/

Set.prototype.isSuperset = function(subset) {
    for (var elem of subset) {
        if (!this.has(elem)) {
            return false;
        }
    }
    return true;
}

Set.prototype.union = function(setB) {
    var union = new Set(this);
    for (var elem of setB) {
        union.add(elem);
    }
    return union;
}

Set.prototype.intersection = function(setB) {
    var intersection = new Set();
    for (var elem of setB) {
        if (this.has(elem)) {
            intersection.add(elem);
        }
    }
    return intersection;
}

Set.prototype.difference = function(setB) {
    var difference = new Set(this);
    for (var elem of setB) {
        difference.delete(elem);
    }
    return difference;
}

export default (statesNeeded, stations) => {
    let finalStations = new Set();

    while (statesNeeded.size !== 0) {
        let bestStation = null;
        let statesCovered = new Set();

        for (let [station, statesForStation] of stations) {
            let covered = statesNeeded.intersection(statesForStation);
            if (covered.size > statesCovered.size) {
                bestStation = station;
                statesCovered = covered;
            }
        }

        finalStations.add(bestStation);
        statesNeeded = statesNeeded.difference(statesCovered);
    }

    return finalStations;
}
