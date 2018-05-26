---
id: sending-auth-requests
title: Sending Autheticated Requests
---

# Sending Authenticated Requests
The default method for sending authenticated requests is to send the token returned from the `Authenticator().generateToken()` method in the `x-auth` header of the request.

