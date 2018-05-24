const MongoSessionStore = require('./sessionStores/mongo').SessionStore;

exports.Session = class {
    constructor(uid, claims, options={}) {
        this.uid = uid;
        this.attributes = claims;

        if (options.storageDb.name == 'mongo') {
            const SessionStore = new MongoSessionStore(
                options.storageDb.connector,
                this.uid
            )
        }
    }
}