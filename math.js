// Exporting functions and variables using module.exports
const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;

const g = 9.8;
const PI = 3.14;

let obj = {
    sum : sum,
    mul : multiply,
    g : g,
    PI : PI
};

module.exports = obj;