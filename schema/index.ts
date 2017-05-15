import {
  GraphQLSchema
} from 'graphql'
import * as query from './query'

export const schema: GraphQLSchema = new GraphQLSchema({
  query: query.schema
})
