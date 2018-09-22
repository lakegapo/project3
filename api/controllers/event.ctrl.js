const models = require("../models");

module.exports = {
  
  createOne: (req, res) => {
    const event = {
      name: req.body.name,
      address1: req.body.address1,
      address2: req.body.address2,
      citystate: req.body.citystate,
      zip: req.body.zip,
      description: req.body.description,
      // category: req.body.category
    };
    models.Event.create(event)
      .then(resp => {
        res.json(resp);
      })
      .catch(err => {
        res.json(err).status(400);
      })
  }
};