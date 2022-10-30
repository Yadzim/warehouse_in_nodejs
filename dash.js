const fs = require("fs")

const dash = () => {
  const products = JSON.parse(fs.readFileSync("products.json", "utf-8")).products;

  if(products.length){
    console.table(products);
  } else {
    console.log("Omborda mahsulot mavjud emas!!!");
  }
}

module.exports = {dash}