const User = require('../models/user.model');

exports.test = function (req, res) {
    res.send('Testing User Controller');
};

exports.product_create = function (req, res) {
    var user = new User(
        {
            userID: req.body.userID,
            name: req.body.name,
            password: req.body.password,
            location: req.body.location
        }
    );

    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('User created successfully')
    })
};