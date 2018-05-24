exports.protect = function(authenticator) {
    return authenticator.authenticate.bind(authenticator);
}