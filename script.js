// node files

let n = 5;

for (let i = 1; i <= n; i++) {
    console.log("Hello",i);
}

// process.argv in node

let args = process.argv;
        
for(let i = 2; i < args.length; i++) {
    console.log("Hello",args[i]);
}

// Exporting and importing modules in node
const math = require("./math");

console.log(math.sum(2,3));