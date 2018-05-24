# Express Auth Middleware
express-authjs is a simple to use express middleware that adds configurable authentication to your express API routes with as little affort as possible.

## Table of Contents
- [Installation](#installing)
- [Basic Usage](#basic-usage)
- [Documentation](#documentation)
- [Changelog](#changelog)
- [License](#license)

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

## Documentation
Please refer to the documentation website on https://nerderbur.github.io/express-authjs

## Changelog
Check the [Github Releases page](https://github.com/nerderbur/express-authjs/releases)

## License
MIT License
