var fs = require("fs");
fs.readdir(process.argv[2],function(err, list){
    if(err){
        console.log(err.stack);
        return;
    }
    
    list.forEach(element => {
        if(element.search("."+process.argv[3])!= -1){
            console.log(element);
        }
    });
});


