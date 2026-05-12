
// const createProduct = require('./product') importar um item
// Importar um objeto
const { createProduct, Product } = require('./product')
require('./hello')

const product = createProduct(1, 'MackBook', 12930)

const product2 = new Product(2, 'Iphone', 8990)

console.log(product.getInfo())
console.log(product2.getInfo())