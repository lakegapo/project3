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
      UserId : req.body.UserId
      // category: req.body.category
    };
    models.Event.create(event)
      .then(resp => {
        res.json(resp);
      })
      .catch(err => {
        res.json(err).status(400);
      })
  },

  getAll: (req, res) => {
    models.Event.findAll()
    .then(resp => {
      res.json(resp);
    })
    .catch(err => {
      res.json(err).status(400);
    });
  },

  getOne: (req, res) => {
    const id = req.params.id;
    models.Event.findOne({
      where: {id: id}
    })
    .then(resp => {
      res.json(resp);
    })
    .catch(err => {
      res.json(err).status(400);
    });
  },

  categoryGetAll: (req, res) => {
    const citystate = req.params.citystate;
    const category = req.params.category;
    models.Event.findAll({
      where: {citystate, category}
    })
    .then(resp => {
      res.json(resp)
    })
  }

};