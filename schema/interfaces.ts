import {
  GraphQLInterfaceType,
  GraphQLNonNull,
  GraphQLID
} from 'graphql'
import * as people from './people'

export const NodeInterface: GraphQLInterfaceType = new GraphQLInterfaceType({
  name: 'NodeInterface',
  description: 'Node interface',
  fields: {
    username: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolveType (fields) {
    if (fields.name) {
      return people.schema
    }

    return people.schema
  }
})
