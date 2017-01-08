var jwt = require('jsonwebtoken');
var User = require('../models/user');
var constants = require('../config/constants');

var ObjectID = require("bson-objectid");

module.exports = (req, res, next) => {
    var sessionToken = req.headers.authorization;
    //var id = req.headers.id;

    if (!req.body.user && sessionToken) {
        jwt.verify(sessionToken, constants.JWT_SECRET,
            (err, decodedId) => {
                // get the decoded payload and header
                if (decodedId) {
                     User.findOne({ _id: ObjectID(decodedId.id.data) }).then((user) => {
                        req['user'] = user;
                        next();
                    }, (err) => {
                        res.send(401, 'not authorized - User.findOne - err :' + err);
                    });

                } else {
                    res.send(401, 'not authorized - non valid decodedId: ' + decodedId + ' err:' + err);
                }
            });
    } else {
        next();
    }
};
