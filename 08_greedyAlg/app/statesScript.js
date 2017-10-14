import states from '../src/states';

let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);

let stations = new Map([
    ["kone", new Set(["id", "nv", "ut"])],
    ["ktwo", new Set(["wa", "id", "mt"])],
    ["kthree", new Set(["or", "nv", "са"])],
    ["kfour", new Set(["nv", "ut"])],
    ["kfive", new Set(["ca", "az"])]
]);

console.log(states(statesNeeded, stations));
