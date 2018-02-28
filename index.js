/**
 * Simple example of how to use the NextAuth module.
 *
 * To invoke next-auth you will need to define a configuration block for your
 * site. You can create a next-auth.config.js file and put all your options
 * in it and pass it to next-auth when calling init().
 *
 * A number of sample configuration files for various databases and
 * authentication options are provided.
 **/

// Include Next.js, Next Auth and a Next Auth config
const next = require('next')
const nextAuth = require('next-auth')
const nextAuthConfig = require('./next-auth.config')
const express = require('express')

const server = express()


// Load environment variables from .env
require('dotenv').load()

// Initialize Next.js
const nextApp = next({
  dir: '.',
  dev: (false)
})
const handle = nextApp.getRequestHandler()

// Add next-auth to next app
nextApp
.prepare()
.then(() => {
  // Load configuration and return config object
  return nextAuthConfig()
})
.then(nextAuthOptions => {
  // Pass Next.js App instance and NextAuth options to NextAuth
  if (nextAuthOptions.port) delete nextAuthOptions.port
  nextAuthOptions.nextApp = nextApp

  server.get('/p/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { id: req.params.id }
    nextApp.render(req, res, actualPage, queryParams)
  })

  server.get('/searchPage/:id', (req, res) => {
    const actualPage = '/searchPage'
    const queryParams = { id: req.params.id }
    nextApp.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Reasdy onsss http://localhost:3000')
  })

  return nextAuth(nextApp, nextAuthOptions)
})
.then((response) => {
  console.log(`Ready sason http://localhost:${process.env.PORT || 3000}`)
})
.catch(err => {
  console.log('An error occurred, unable to start the server')
  console.log(err)
})
