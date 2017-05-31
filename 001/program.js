const mymodule = require("./mymodule.js");
const dirName = process.argv[2]
const ext = process.argv[3]
function callback (err, data){
  if (err)
    return console.error(err);
  return data.forEach(file => console.log(file))
}
mymodule(dirName, ext, callback);
