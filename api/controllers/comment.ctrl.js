const models = require("../models");
module.exports = {
  getAll: (req, res) => {
    const id = req.params.id;
    models.Comment.findAll({
      include: [
        {
          model: models.User,
          attributes: ["firstName", "imageUrl"]
        }
      ],
      where: { eventId: id }
    })
      .then(resp => {
        res.json(resp);
      })
      .catch(err => {
        res.json(err).status(400);
      });
  },
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