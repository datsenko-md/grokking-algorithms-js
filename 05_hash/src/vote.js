export default (name, voted) => {
    if (name in voted) {
        console.log("kick them out!");
    } else {
        voted[name] = true;
        console.log("let them vote!");
    }
}
