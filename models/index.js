// import the other four models created into one
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
  as: "product_category",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  as: "products_in_category",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
  },
  foreignKey: "product_id",
  as: "product_tags",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
  foreignKey: "tag_id",
  as: "products_in_tag",
});

// exports all the modules
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};