'use strict';

var fs   = require('fs');

var readContent   = [],
    relativePaths = [],
    directoryPath = [],
    relativePath  = '';

module.exports = function(nameDirectory){

    return readDirectoryPath(nameDirectory);

    function readDirectoryPath(nameDirectory) {

        readContent = fs.readdirSync(nameDirectory);
        for (var i in readContent) {
            if (readContent[i].indexOf('.') == -1) {
                if(fs.lstatSync(nameDirectory + '/' + readContent[i]).isDirectory()){
                    relativePaths.push(nameDirectory + '/' + readContent[i]);
                }
            }
        }
        relativePath = relativePaths[0];

        if(relativePath != undefined)
        {
            directoryPath.push(relativePath);
        }

        if (relativePaths.length != 0) {
            relativePaths.splice(0, 1);
            return readDirectoryPath(relativePath);
        } else {
            return directoryPath;
        }
    }
}
