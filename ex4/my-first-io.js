var fs = require("fs");
fs.readFile(process.argv[2], function(err, buffer){
    if(err){
        console.log(e.stack);
        return;
    } 
    
    var data = buffer.toString();
    var t = data.split('\n');
    console.log(Number((t.length)-1));
});