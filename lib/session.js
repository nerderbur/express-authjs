exports.Session = class {
    constructor(uid, claims) {
        this.uid = uid;
        this.attributes = claims;
    }

}