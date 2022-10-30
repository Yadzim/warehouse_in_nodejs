# Warehouse
Deploy and sell the project to the warehouse.

Created by [Azizxon](https://github.com/yadzim)

#### Installation by npm

```bash
npm i product_add_and_remove_to_warehouse_by_eric
```

#### Installation by yarn

```bash
yarn add product_add_and_remove_to_warehouse_by_eric
```

## Using

#### Comands:
* `node app` :  View warehouse
* `node --dep product_name product_count` : Add product to warehouse
* `node -sell product_name product_count` : Sell the product from the warehouse

***

#### Create products,json file

```cmd
node app
```

![Image](https://github.com/Yadzim/warehouse_in_nodejs/tree/main/images/create_products.json_file.png?raw=true)

#### Add product to the warehouse

```cmd
node app --dep Apple 4
```

![Image](https://github.com/Yadzim/warehouse_in_nodejs/blob/main/images/add_product_to_warehouse.png?raw=true)

#### View the new product

```cmd
node app
```

![Image](https://github.com/Yadzim/warehouse_in_nodejs/blob/main/images/view_warehouse.png?raw=true)

#### Sell the product from the warehouse

```cmd
node app -sell apple 1
```

![Image](https://github.com/Yadzim/warehouse_in_nodejs/blob/main/images/sell_product_from_warehouse.png?raw=true)

#### View the end result

```cmd
node app
```

![Image](https://github.com/Yadzim/warehouse_in_nodejs/blob/main/images/full_view_warehouse.png?raw=true)

## Errors