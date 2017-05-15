/// <reference types="graphql" />

import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLFieldConfigArgumentMap
} from 'graphql'
import { NodeInterface } from './interfaces'
import * as db from '../database'

export const resolver = {
  allPeople (root: any, args: {[key: string]: string}) { // tslint:disable-line

    if (args && args.username) {
      const { username } = args
      const userFound = db.people.find(item => {
        return item.username === username
      })

      return [userFound]
    }

    if (root && root.partner) {
      const { partner } = root
      return db.people.filter((item): Object | void => {
        if ((partner as Array<string>).indexOf(item.username) > -1) {
          return JSON.stringify(item)
        }
      })
    }

    return db.people
  }
}

export const schema: GraphQLObjectType = new GraphQLObjectType({
  name: 'people',
  description: 'List of people in Djavaweb',
  fields () {
    return {
      username: {
        type: new GraphQLNonNull(GraphQLID),
        description: 'ID of person in Djavaweb'
      },
      name: {
        type: GraphQLString,
        description: 'Name of person'
      },
      birthday: {
        type: GraphQLString,
        description: 'Date this person was born'
      },
      position: {
        type: GraphQLString,
        description: 'Position of the person'
      },
      partner: {
        type: new GraphQLList(schema),
        args: {
          username: {
            type: GraphQLString,
            description: 'Find partner by username'
          }
        },
        description: 'partner from this person',
        resolve: resolver.allPeople
      }
    }
  },
  interfaces: [NodeInterface]
})
