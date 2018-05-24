module.exports = function(authenticator) {
    return authenticator.authenticate.bind(authenticator);
}