exports.guard = function(authenticator) {
    return authenticator.authenticate.bind(authenticator);
}