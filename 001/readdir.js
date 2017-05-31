const fs = require("fs");

fs.readdir(process.argv[2], callback)

function callback(err, fileList){
    if(err){console.log(err)}
    else{
	const ext = `.${process.argv[3]}`;
    	var filtered = fileList.filter(f => f.endsWith(ext))
	for(let i = 0; i < filtered.length; i++) {
	    console.log(filtered[i]);
	}
    }
}
