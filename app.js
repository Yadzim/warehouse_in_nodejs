const fs = require("fs")
const {sell} = require("./sell");
const {dep} = require("./dep");
const {dash} = require("./dash");

const [ , , file_name, product_name, count] = process.argv;

const createFile = () => fs.writeFileSync("products.json", JSON.stringify({products: []}));

if(fs.existsSync("products.json")){
  if(fs.readFileSync("products.json", "utf-8")){
    if(!JSON.parse(fs.readFileSync("products.json", "utf-8")).products)
      createFile();
  } else {
    createFile();
  }
} else {
  createFile();
}

if(!/^-?[\d.]+(?:e-?\d+)?$/.test(count) && count !== undefined) return console.log("\x1b[41m", "Maxsuot soni 'number' tipida bo'lishi kerak!!!");

switch(file_name){
  case "--dep": dep(product_name, count);
    break;
  case "-sell": sell(product_name, count);
    break;
  case undefined: dash();
    break;
  default: console.log(
    "\x1b[31m", "Buyruq berishda xatolik!!!",
    "\x1b[32m", "\n Example: \n   'node app.js --dep product_name count' \n   'node app.js -sell product_name count' \n   'node app.js'", "\x1b[37m")
}