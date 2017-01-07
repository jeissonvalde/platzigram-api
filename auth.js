'use strict'

import { send, json } from 'micro' // eslint-disable-line no-unused-vars
import HttpHash from 'http-hash'
import Db from 'platzigram-db'
import config from './config'
import DbStub from './test/stub/db'
import utils from './lib/utils'

const env = process.env.NODE_ENV || 'production'
let db = new Db(config.db) // eslint-disable-line no-unused-vars

if (env === 'test') {
  db = new DbStub()
}

const hash = HttpHash()

hash.set('POST /', async function authenticate (req, res, params) {
  let credentials = await json(req)
  await db.connect()
  let auth = await db.authenticate(credentials.username, credentials.password)

  if (!auth) {
    return send(res, 401, { error: 'Invalid credentials' })
  }

  let token = await utils.signToken({
    username: credentials.username
  }, config.secret)

  send(res, 200, token)
})

export default async function main (req, res) {
  let { method, url } = req // object destructuring: esto es igual a escribir let method = req.method... let url = req.url
  let match = hash.get(`${method.toUpperCase()} ${url}`)

  if (match.handler) {
    try {
      await match.handler(req, res, match.params)
    } catch (e) {
      send(res, 500, { error: e.message })
    }
  } else {
    send(res, 404, { error: `route not found` })
  }
}
