const models = require("../models");
console.log(models.Users);
module.exports = {
    getOne: (req, res) => {
        const id = req.params.id;
        models.User.findOne({
            where: {
                id: id
            }
        })
            .then(resp => {
                res.json(resp);
            })
            .catch(err => {
                res.json(err).status(400);
            });
    },
    getAll: (req, res) => {
        models.User.findAll()
            .then(resp => {
                res.json(resp);
            })
            .catch(err => {
                res.json(err).status(400);
            });
    },
    createOne: (req, res) => {
        const user = {
            email: req.body.email,
            googleId: req.body.googleId,
            lastName: req.body.familyName,
            firstName: req.body.givenName,
            imageUrl: req.body.imageUrl
        }
        models.User.findOrCreate({
            where: {
                googleId: user.googleId
            },
            defaults: user
        })
            .then(resp => {
                // sessionStorage.setItem("userId", resp[0].dataValues.id);
                res.send(resp[0].dataValues);
                console.log(resp[0].dataValues.id);
            })
            .catch(err => {
                res.json(err).status(400);
            })
    }
}