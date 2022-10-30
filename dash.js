const fs = require("fs")

const dash = () => {
  const products = JSON.parse(fs.readFileSync("products.json", "utf-8")).products;

  console.table(products);
}

module.exports = {dash}