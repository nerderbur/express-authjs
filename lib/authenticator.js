module.export = class Authenticator {
    constructor(type) {
        this.type = type || 'jwt';
    }

    authenticate(req, res, next) {
        console.log('Authentication middleware running!');
    }
}