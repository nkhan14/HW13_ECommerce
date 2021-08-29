const { Category } = require('../models');

// adding the different categories of items I want in this backend 
const categoryData = [
  {
    category_name: 'Tops',
  },
  {
    category_name: 'Bottoms',
  },
  {
    category_name: 'Accessories',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;