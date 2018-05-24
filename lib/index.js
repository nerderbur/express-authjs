exports.Authenticator = require('./authenticator').Authenticator;
exports.protect = require('./protector');

exports.helloWorld = function() {
    console.log('Hello world from express-auth');
}

