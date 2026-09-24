const { getProducts, saveProducts } = require('../services/productServices');

function getAllProducts(req, res) {
    res.json(getProducts());
}

function getProductById(req, res) {
    const id = Number(req.params.id);
    const products = getProducts();
    const product = products.find((p) => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json(product);
}

function addProduct(req, res) {
    const products = getProducts();
    const newProduct = {
        id: Date.now(),
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description
    };

    products.push(newProduct);
    saveProducts(products);
    res.status(201).json(newProduct);
}

function updateProduct(req, res) {
    const id = Number(req.params.id);
    const products = getProducts();
    const product = products.find((p) => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    product.name = req.body.name;
    product.price = req.body.price;
    product.category = req.body.category;
    product.description = req.body.description;

    saveProducts(products);
    res.json(product);
}

function deleteProduct(req, res) {
    const id = Number(req.params.id);
    const products = getProducts();
    const newProducts = products.filter((p) => p.id !== id);

    saveProducts(newProducts);
    res.json({
        message: "Product Deleted"
    });
}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
};
