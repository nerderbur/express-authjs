---
id: guarding-routes
title: Protecting Routes
---

# Guarding Routes
To guard a specific route, you must add the `guard()` function to your route as middleware.

N.B: The ```guard()``` function takes an instance of the Authenticator class.

```javascript
app.get('/some-route', guard(authenticator), (req, res) => {
    // Route code goes here...
}
```

## Sending Authenticated Requests
The default method for sending authenticated requests is to send the token returned from the `Authenticator().generateToken()` method in the `x-auth` header of the request.

If you specified the header name that you wanted to be used for requests when you created the `new Authenticator()` object then you may use your custom header name for requests instead of the default.
