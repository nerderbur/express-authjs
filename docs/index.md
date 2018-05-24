---
id: index
title: Getting Started
---
# Express Auth Middleware
express-authjs is a simple to use express middleware that adds configurable authentication to your express API routes with as little affort as possible.

## Table of Contents
[Getting Started](https://github.com/nerderbur/express-authjs/blob/master/README.md#getting-started)

[Guarding Routes](guarding-routes)

## Getting Started
The instructions below will help you get started using exress-authjs as quickly as possible.

### Installing
```
npm install express-authjs
```

### Basic Usage
```javascript
const express = require('express');
const { Authenticator, guard } = require('express-authjs');

const authenticator = new Authenticator();

app.get('/', (req, res) => {
    res.send('Unprotected route.');
})

app.get('/protected', guard(authenticator), (req, res) => {
    res.send('Protected route.');
})
```
