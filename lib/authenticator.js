const jwt = require('jsonwebtoken');

exports.Authenticator = class {
    constructor(options) {
        this.type = options.type || 'jwt';
        this.tokenHeaderName = options.tokenHeaderName || 'x-auth';
        this.secret = options.tokenSecret || 'secret';
    }

    authenticate(req, res, next) {
        let token = req.get(this.tokenHeaderName);
        if (!token) return res.status(401).send('Unauthorized!');

        try {
            jwt.verify(token, this.secret);
            next();
        } catch(e) {
            console.log(e);
            return res.status(401).send('Unauthorized!');
        }
    }
}