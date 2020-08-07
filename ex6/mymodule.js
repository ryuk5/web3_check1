module.exports = function (dir, ext, callback){
    var fs = require("fs");
    var path = require("path");
    var filtredList = [];
    var currentFile;
    var currentExt;
    var x;
    
    fs.readdir(dir, function (err, list){
        if(err){
            return callback(err);
        }

        for(x in list) {
            currentFile = list[x];
            currentExt = path.extname(currentFile);

            if(currentExt === '.'+ ext){
                filtredList.push(currentFile);
            }
        }

        return callback(null, filtredList);
    });
}