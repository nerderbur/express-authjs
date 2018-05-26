# class Authenticator()
The Authenticator class holds all of the necessary configurations for how authentication will be handled in your server.

## Creating an instance
The Authenticator class takes an optional argument which is a json object that contains all the options for how you would like your requests to be authenticated.

Example:
```js
const { Authenticator } = require('express-authjs');

const authOptions = {
  type: "jwt", // default: "jwt"
  tokenHeaderName: "x-auth-token", // default: "x-auth"
  tokenSecret: "some-secret", // default: "secret"
}

const authenticator = new Authenticator(authOptions);
```

