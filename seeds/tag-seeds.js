const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'belts',
  },
  {
    tag_name: 'jewelry',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'hair',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;

// eventually will need models for these 