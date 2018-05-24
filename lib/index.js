exports.Authenticator = require('./authenticator').Authenticator;
exports.protect = require('./protector').protect;

exports.helloWorld = function() {
    console.log('Hello world from express-auth');
}

