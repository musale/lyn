const net = require("net");
const strf = require("strftime");
const port = process.argv[2];

var server = net.createServer(function(socket){
  let date = new Date();
  const fmtDate = strf("%F %R", date);
  socket.write(strf(fmtDate));
  socket.end("\n");
});

server.listen(port);
