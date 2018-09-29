const models = require("../models");
module.exports = {
  getAll: (req, res) => {
    models.Comment.findAll({
      include: [
        {
          model: models.User,
          attributes: ["firstName", "imageUrl"]
        }
      ]
    })
      .then(resp => {
        res.json(resp);
      })
      .catch(err => {
        res.json(err).status(400);
      });
  },
  //createOne checks if the googleid has hit db before, if not creates row and either way sends back user object as response so front end can store db id in session storage
  createOne: (req, res) => {
    const comment = {
      text: req.body.text,
      UserId: req.body.UserId,
      EventId: req.body.EventId
    }

    models.Comment.create(comment)
      .then(resp => {
        res.send(resp[0].dataValues);
      })
      .catch(err => {
        res.json(err).status(400);
      })
  }
}