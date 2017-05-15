import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString
} from 'graphql'
import * as people from './people'

export const schema: GraphQLObjectType = new GraphQLObjectType({
  name: 'query',
  description: 'Root Query Schema',
  fields: {
    people: {
      type: new GraphQLList(people.schema),
      args: {
        username: {
          type: GraphQLString,
          description: 'Username that you want to find'
        }
      },
      description: 'Show all people',
      resolve: people.resolver.allPeople
    }
  }
})
