const sum = ((...numbers) => numbers.reduce(((acc, val) => {
    return acc + val;
}), 0));

console.log(sum(1, 2, 3));