'use strict'

const next = require('next')
const nextAuth = require('next-auth')
const nextAuthConfig = require('./next-auth.config')

// Load environment variables from .env file if present
require('dotenv').load()

process.on('uncaughtException', function(err) {
  console.error('Uncaught Exception: ', err)
})

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection: Promise:', p, 'Reason:', reason)
})

// Default when run with `npm start` is 'production' and default port is '80'
// `npm run dev` defaults mode to 'development' & port to '3000'
process.env.NODE_ENV = process.env.NODE_ENV || 'production'
process.env.PORT = process.env.PORT || 3000

// Initialize Next.js
const nextApp = next({
  dir: '.',
  dev: false
})

// Add next-auth to next app
nextApp
.prepare()
.then(() => {
  // Load configuration and return config object
  return nextAuthConfig()
})
.then(nextAuthOptions => {
  // Pass Next.js App instance and NextAuth options to NextAuth
  // Note We do not pass a port in nextAuthOptions, because we want to add some
  // additional routes before Express starts (if you do pass a port, NextAuth
  // tells NextApp to handle default routing and starts Express automatically).
  if (nextAuthOptions.port) delete nextAuthOptions.port
  return nextAuth(nextApp, nextAuthOptions)
})
.then(nextAuthOptions => {
  // Get Express and instance of Express from NextAuth
  const express = nextAuthOptions.express
  const expressApp = nextAuthOptions.expressApp

  // A simple example of custom routing
  // Send requests for '/custom-route/{anything}' to 'pages/examples/routing.js'
  expressApp.get('/p/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { id: req.params.id }
    return nextApp.render(req, res, actualPage, queryParams)
  })

  expressApp.get('/searchPage/:id', (req, res) => {
    const actualPage = '/searchPage'
    const queryParams = { id: req.params.id }
    return nextApp.render(req, res, actualPage, queryParams)
  })

  // Default catch-all handler to allow Next.js to handle all other routes
  expressApp.all('*', (req, res) => {
    let nextRequestHandler = nextApp.getRequestHandler()
    return nextRequestHandler(req, res)
  })

  expressApp.listen(process.env.PORT, err => {
    if (err) {
      throw err
    }
    console.log('> Ready on http://localhost:' + process.env.PORT + ' [' + process.env.NODE_ENV + ']')
  })
})
.catch(err => {
  console.log('An error occurred, unable to start the server')
  console.log(err)
})
