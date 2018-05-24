
---
id: guarding-route
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
