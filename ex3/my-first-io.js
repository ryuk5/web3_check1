var fs = require("fs");
var buffer = fs.readFileSync(process.argv[2]);
//var buffer = fs.readFileSync('input.txt');
var data = buffer.toString();
var t = data.split('\n');
//console.log(t);
//console.log("\n");
console.log(Number((t.length)-1));
