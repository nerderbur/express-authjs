exports.SessionStore = class {
    constructor(mongoose) {
        this.mongoose = mongoose;
        const Schema = mongoose.Schema;

        const sessionSchema = new Schema({
            created: { type: Date, default: Date.now },
            expires: { type: Date },
            uid: { type: String }
        })

        this.Session = mongoose.model('Session', sessionSchema);
    }
}