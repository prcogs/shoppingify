const Category = require('../models/category')


exports.getCategory =  (req, res, next) => {
    Category.find()
    .then(categories => res.status(200).json(categories))
    .catch(error => res.status(400).json({ error }));
}