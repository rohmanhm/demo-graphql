import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLString
} from 'graphql'
import * as people from './people'

export const schema: GraphQLObjectType = new GraphQLObjectType({
  name: 'mutation',
  description: 'Root Mutation Schema',
  fields: {
    addPeople: {
      type: new GraphQLList(people.schema),
      description: 'Add new people to Djavaweb',
      args: {
        username: {
          type: new GraphQLNonNull(GraphQLString),
          description: 'username new person'
        },
        name: {
          type: GraphQLString,
          description: 'name of new person'
        },
        position: {
          type: GraphQLString,
          description: 'Position of new person'
        },
        birthday: {
          type: GraphQLString,
          description: 'Date that person was born'
        },
        partner: {
          type: new GraphQLList(GraphQLString),
          description: 'List of array partner for this person'
        }
      },
      resolve: people.resolver.addPeople
    }
  }
})
