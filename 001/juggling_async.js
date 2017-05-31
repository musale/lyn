const http = require("http");
const bl = require("bl");
let results = []
let counter = 0


function consoleRes(){
  for(let i = 0; i < 3; i++){
    console.log(results[i]);
  }
}

for (let i = 0; i < 3; i++) {
  http.get(process.argv[2 + i], function(response){
    response.pipe(bl(function (err, data){
      if (err)
        return console.error(err)
      results[i] = data.toString();
      counter++
      if (counter == 3){
        consoleRes();
      }
    }))
  }).on("error", console.error);

}
