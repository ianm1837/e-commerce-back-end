const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products

  Category.findAll({
    include: [{ model: Product }],
  }).then((data) => res.json(data));
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findAll({
    where: {
      id: req.params.id,
    },
    include: [{ model: Product }],
  }).then((data) => res.json(data));
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category,
  }).then((data) => res.json(data));
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    { category_name: req.body.category },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then((data) => res.json(data));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  }).then(function (data) {
    res.json(data);
  });
});

module.exports = router;
