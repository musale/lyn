const fs = require("fs");
const path =  require("path");

function readFiles(dirName, callback, ext){
  fs.readdir(dirName, cb);
  function cb(err, data){
    if (err) {
      return callback(err)
    } else {
      const fileList = filterFiles(data, ext)
      return callback(null, fileList)
    }
  }

  function filterFiles(fileList, ext){
    return fileList.filter(f => path.extname(path.basename(f)) === ext)
  }
}
module.exports = function (dirName, ext, callback) {
  const newExt = `.${ext}`;
  readFiles(dirName, callback, newExt);
}
