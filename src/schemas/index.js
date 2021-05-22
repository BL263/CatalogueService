import { SchemaComposer } from 'graphql-compose';
import productModel from './product.js';
import commentModel from './comment.js';


const schemaComposer = new SchemaComposer();
schemaComposer.Query.addFields({
    ...productModel.ProductQuery,
    ...commentModel.CommentQuery,
});

schemaComposer.Mutation.addFields({
    ...productModel.ProductMutation,
    ...commentModel.CommentMutation,
});

export default schemaComposer.buildSchema();