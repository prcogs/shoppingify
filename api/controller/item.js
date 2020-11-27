const Item = require('../models/item')



exports.getItem = (req, res, next) => {
    Item.find()
      .then(items => res.status(200).json(items))
      .catch(error => res.status(400).json({ error }));
}