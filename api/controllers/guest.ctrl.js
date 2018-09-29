const models = require("../models");
module.exports = {
    getAll: (req, res) => {
        models.Guest.findAll()
            .then(resp => {
                res.json(resp);
            })
            .catch(err => {
                res.json(err).status(400);
            });
    },
//createOne checks if the googleid has hit db before, if not creates row and either way sends back user object as response so front end can store db id in session storage
    createOne: (req, res) => {
        const guest = {
            UserId: req.body.userId,
            EventId: req.body.eventId
        }
        models.Guest.findOrCreate({
            where: {
                UserId: guest.UserId
            },
            defaults: guest
        })
            .then(resp => {
                res.send(resp[0].dataValues);
            })
            .catch(err => {
                res.json(err).status(400);
            })
    }
}