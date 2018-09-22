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
//createOne checks if the googleid has hit db before, if not creates row and either way sends back user object as response so front end can store db id in session storage
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
                res.send(resp[0].dataValues);
            })
            .catch(err => {
                res.json(err).status(400);
            })
    }
}