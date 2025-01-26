import { type SchemaTypeDefinition } from 'sanity'
import { post } from './post'
import { tag } from './tag'
import { comment } from './comment'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, tag, comment],
}
