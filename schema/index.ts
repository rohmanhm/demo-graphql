import {
  GraphQLSchema
} from 'graphql'
import * as query from './query'
import * as mutation from './mutation'

export const schema: GraphQLSchema = new GraphQLSchema({
  query: query.schema,
  mutation: mutation.schema
})
