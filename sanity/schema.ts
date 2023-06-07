import { type SchemaTypeDefinition } from 'sanity';
import { herosection } from './herosection';
import { product } from './product';
import { category } from './category';
import { dressType } from './dresstype';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [herosection, product, category, dressType],
};