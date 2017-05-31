const http = require("http");
const url = require("url");
const port = Number(process.argv[2]);

const server = http.createServer((request, res) => {
  const query = url.parse(request.url, true);
  let date = new Date(query.query.iso);
  console.log(query)

  if (query.pathname == "/api/parsetime") {
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        "hour": date.getHours(),
        "minute": date.getMinutes(),
        "second": date.getSeconds()
      })
    )
  }
   else if (query.pathname == "/api/unixtime") {
    res.end(
      JSON.stringify({
        "unixtime": date.getTime()
      })
    )
  }
});

server.listen(port);
