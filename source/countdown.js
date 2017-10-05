const countdown = (num) => {
    console.log(num);
    return num <= 1 ? null : countdown(num - 1);
}

export default countdown;
