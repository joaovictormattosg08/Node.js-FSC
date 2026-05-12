class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    getInfo() {
        return "ID: " + this.id + " NAME: " + this.name + " PRICE: " + this.price;
    }
}


function createProduct(id, name, price) {
    return new Product(id, name, price)
}
// Exportar o modulo
module.exports = {
    createProduct: createProduct,
    Product: Product,
};
