// const { createProduct, Product } = require('./product')
import { Product, createProduct } from './product.js'
import productPrice from './product.js' // Importa via default
import * as productModule from './product.js' // Importa tudo do arquivo como productModule


productModule.createProduct(1, 'MackBook', 12930) //Usamos assim a importação do productModule
const product = createProduct(1, 'MackBook', 12930)

const product2 = new Product(2, 'Iphone', 8990)

console.log(product.getInfo())
console.log(product2.getInfo())