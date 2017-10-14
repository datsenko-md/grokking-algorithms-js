export default (costs, processed) => {
    let lowestCost = Infinity;
    let lowestCostIndex = null;
    for (let node in costs) {
        let cost = costs[node];
        if (cost < lowestCost && processed.indexOf(node) === -1) {
            lowestCost = costs[node];
            lowestCostIndex = node;
        }
    }
    return lowestCostIndex;
}
