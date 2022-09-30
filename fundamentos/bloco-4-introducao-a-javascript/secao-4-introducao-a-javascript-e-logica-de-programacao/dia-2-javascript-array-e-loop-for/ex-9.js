let array = [];

for (index = 0; index < 25; index += 1) {
    array.push(index + 1);
}

console.log(array);

for (index = 0; index < array.length; index += 1) {
    console.log("Divisão do elemento", array[index], "por 2:", array[index] / 2);
}