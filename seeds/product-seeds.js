const { Product } = require('../models');

// adding some products to each category and the database
const productData = [
  {
    product_name: 'V-Neck T-Shirt',
    price: 15.99,
    stock: 11,
    category_id: 1,
  },
  {
    product_name: 'Yeezy',
    price: 490.0,
    stock: 5,
    category_id: 5,
  },
  {
    product_name: 'NorthFace Beanie',
    price: 32.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'Valley Girl Headband',
    price: 12.99,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'Skiiny Jeans - Black',
    price: 29.99,
    stock: 12,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;

// eventually will need models for these 