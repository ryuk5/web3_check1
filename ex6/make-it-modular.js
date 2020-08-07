const mymodule = require('./mymodule.js');

var dir = process.argv[2];
var ext = process.argv[3];
var callback = function(err, list){
    for(x in list){
        console.log(list[x]);
    }
}

mymodule(dir, ext, callback);