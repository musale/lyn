const http = require("http");
const fs = require("fs");
const port = process.argv[2];
const location = process.argv[3];


var server = http.createServer(function(req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })
  const readStream = fs.createReadStream(location);
  readStream.on("open", function(){
    readStream.pipe(res);
  });

  readStream.on("error", function(err){
    res.end(err);
  });
})
server.listen(port)
