const http = require("http");

url = process.argv[2];

function callback(response){
  response.setEncoding("utf8");
  response.on("data", console.log);
  response.on("error", console.error);
}

http.get(url, callback).on("error", console.error);
