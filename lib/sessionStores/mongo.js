const debug = require('debug')('authjs:mongo');

exports.SessionStore = class {
    constructor(mongoose, id, data={}) {
        this.mongoose = mongoose;
        const Schema = mongoose.Schema;

        const sessionSchema = new Schema({
            created: { type: Date, default: Date.now },
            expires: { type: Date },
            uid: { type: String }
        })

        this.Session = mongoose.model('Session', sessionSchema);

        this.Session.findById(id, (err, session) => {
            if (err) throw new Error('There was an error querying.')

            if (session) {
                debug('Session already created!');

                this.id = id;
                this.session = session;
            } else {
                this.session = new this.Session({ uid: data.uid });
                this.session.save((err, savedSession) => {
                    if (err) throw new Error('There was an error saving session.');

                    this.id = savedSession._id;
                    debug(`Session saved! ID: ${this.id}`);
                });
            }
        })
    }
}