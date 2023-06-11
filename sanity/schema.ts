import { type SchemaTypeDefinition } from 'sanity';
import { product } from './product';
import { category } from './category';
import { dressType } from './dresstype';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, dressType],
};