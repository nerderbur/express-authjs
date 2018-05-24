module.export = function(authenticator) {
    return authenticator.authenticate.bind(authenticator);
}