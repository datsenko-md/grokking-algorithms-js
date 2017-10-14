import findLowestCostNode from './findLowestCostNode';

export default (graph, costs, parents) => {
    let processed = [];

    let node = findLowestCostNode(costs, processed);

    while (node !== null) {
        let cost = costs[node];
        let neighbors = graph[node];
        for (let n in neighbors) {
            let newCost = cost + neighbors[n];
            if (newCost < costs[n]) {
                costs[n] = newCost;
                parents[n] = node;
            }
        }
        processed.push(node);
        node = findLowestCostNode(costs, processed);
    }

    console.log(costs);
    console.log(parents);
    console.log(processed);
}
