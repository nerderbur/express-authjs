const jwt = require('jsonwebtoken');
const { Session } = require('./session');

exports.Authenticator = class {
    constructor(options={}) {
        this.type = options.type || 'jwt';
        this.tokenHeaderName = options.tokenHeaderName || 'x-auth';
        this.secret = options.tokenSecret || 'secret';
    }
    authenticate(req, res, next) {
        let token = req.get(this.tokenHeaderName);
        if (!token) return res.status(401).send('Unauthorized!');

        try {
            let decoded = jwt.verify(token, this.secret);
            req.session = new Session(decoded.uid, decoded.customClaims);
            next();
        } catch(e) {
            console.log(e);
            return res.status(401).send('Unauthorized!');
        }
    }
    generateTgoken(uid, customClaims) {
        let token = jwt.sign({uid: uid, claims: customClaims || {}}, this.secret);

        return token;
    }
}