import { type SchemaTypeDefinition } from 'sanity';
import { herosection } from './herosection';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [herosection],
};