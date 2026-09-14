const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '../products.json');

function getProducts() {
    return JSON.parse(fs.readFileSync(FILE, 'utf8'));
}

function saveProducts(products) {
    fs.writeFileSync(FILE, JSON.stringify(products, null, 2));
}

module.exports = { getProducts, saveProducts };
