/** @format */

const fs = require("fs");

const dep = (name, count) => {
  const products = JSON.parse(fs.readFileSync("products.json", "utf-8")).products;

  if(products.find(e => e.name.toLowerCase() === name.toLowerCase())){
    products.map(e => {
      if(e.name.toLowerCase() === name.toLowerCase())
        e.dep = Number(e.dep) + Number(count);
    })
  } else {
    products.push({
      name: name,
      dep: Number(count),
      sell: 0,
    })
  }

  fs.writeFileSync("products.json", JSON.stringify({products}));

  console.log( "\x1b[32m","Successfull!\n","\x1b[37m","Omborga ",count," ta ",name," qo'shildi");
}

module.exports = {dep}