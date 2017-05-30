const fs = require("fs");

const filePath = process.argv[2];
const fileBuffer = fs.readFileSync(filePath);

console.log(fileBuffer.toString().split("\n").length - 1);
