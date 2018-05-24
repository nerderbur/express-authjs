const jwt = require('jsonwebtoken');
const { Session } = require('./session');

exports.Authenticator = class {
    constructor(options={}) {
        this.type = options.type || 'jwt';
        this.tokenHeaderName = options.tokenHeaderName || 'x-auth';
        this.secret = options.tokenSecret || 'secret';
        if (options.providers) {
            for (provider in options.providers) {
                if (provider === 'facebook') this.isFacebookEnabled = true;
            }
        }
        this.storageOptions = options.storage;
    }
    authenticate(req, res, next) {
        let token = req.get(this.tokenHeaderName);
        if (!token) return res.status(401).send('Unauthorized!');

        try {
            let decoded = jwt.verify(token, this.secret);
            
            if (this.storageOptions.enabled){
                req.session = new Session(decoded.uid, this.storageOptions);
            } else {
                req.session = new Session(decoded.uid, decoded.customClaims);
            }
            
            next();
        } catch(e) {
            console.log(e);
            return res.status(401).send('Unauthorized!');
        }
    }
    generateToken(uid, customClaims) {
        let token = jwt.sign({uid: uid, claims: customClaims || {}}, this.secret);

        return token;
    }
}