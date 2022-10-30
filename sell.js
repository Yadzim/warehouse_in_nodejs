const fs = require("fs");

const sell = (name, count) => {
  const products = JSON.parse(fs.readFileSync("products.json", "utf-8")).products;

  if(products.find(e => e.name.toLowerCase() === name.toLowerCase())){
    let error = {error: false, dep: 0};
    products.map(e => {
      if(e.name.toLowerCase() === name.toLowerCase())
        if(e.dep < count) {
          return error = {error: true, dep: e.dep}
        } else {
          e.sell = Number(e.sell) + Number(count);
          e.dep = e.dep - count;
        }
    })

    if(error.error){
      console.log("Omborda jami ", error.dep, " ta ", name, " bor!!!,", "\x1b[33m" , "Undan ko'p sotish mumkin emas!!!")
    } else{
      fs.writeFileSync("products.json", JSON.stringify({products}));
      console.log( "\x1b[32m", "Successfull\n", "\x1b[37m", "Ombordan", count, " ta ", name, " sotildi");
    }
  } else {
    return (
      console.log("\x1b[31m", "Bunday nomli maxsulot omborda mavjud emas", "\x1b[37m"),
      console.table(products)
    )
  }

}

module.exports = {sell}