// Para exportar usando o ES MODULES usamos apenas o export na frente da classe
export class Product {
    constructor(id, name, price) {
        this.id = id
        this.name = name
        this.price = price
    }
    getInfo() {
        return "ID: " + this.id + " NAME: " + this.name + " PRICE: " + this.price;
    }
}
export function createProduct(id, name, price) {
    return new Product(id, name, price)
}
const productPrice = 230;

export default productPrice;

// module.exports = {
//     createProduct: createProduct,
//     Product: Product,
// };
