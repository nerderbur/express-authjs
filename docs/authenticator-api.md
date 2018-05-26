---
id: authenticator-api
title: Authenticator() API
---

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

### Method: generateToken([uid, customClaims])
- uid (required): a string containing the unique identifier for the user you are trying to create the token for.
- customClaims (optional): a JSON object containing all the custom attributes you would like to be added to the token.

> *Returns* a string containing the token.

Creates a JSON Web Token that can be used to authenticate future requests.

