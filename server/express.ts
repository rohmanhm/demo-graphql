/// <reference types="express-serve-static-core" />
/// <reference types="express-graphql" />

import * as core from "express-serve-static-core"

import * as express from 'express'
import * as GraphQLMiddleware from 'express-graphql'
import * as rootSchema from '../schema'

export interface ServerInterface {
  start (): Promise<any>
  middleware (): void
}

export class Server implements ServerInterface {
  protected port: number
  protected server: core.Express

  constructor (port?: number) {
    this.port = port || process.env.PORT
    if (!port) {
      throw new Error(`You must specified the server port to listen`)
    } else {
      this.server = express()
      this.middleware()
    }
  }

  middleware () {
    // GraphQL Middleware
    this.server.use('/', GraphQLMiddleware({
      graphiql: true,
      schema: rootSchema.schema
    }))
  }

  start () {
    return new Promise((resolve, reject) => {
      this.server.listen(this.port, (err: any) => {
        if (err) reject(err)
        resolve()
      })
    })
  }
}

export default Server
