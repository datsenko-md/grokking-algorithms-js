import findMangoSeller from '../source/findMangoSeller';

/*
let graph = {};
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];
*/

let graph = {};
graph["you"] = ["alice"];
graph["alice"] = ["you"];

let searchQueue = [];

console.log(findMangoSeller(searchQueue, graph, "you"));
