import express from 'express';
import {buildSchema} from "graphql";
import {graphqlHTTP} from "express-graphql";
import {makeExecutableSchema} from 'graphql-tools'
import mongoose from 'mongoose';

function ConnectDatabase(){

    const promise = mongoose.connect('mongodb+srv://admin:Aa123456@catalogueservice.ti9p1.mongodb.net/catalog\n' +
        '\n', {
        useMongoClient: true
    });

    const db = mongoose.connection;

    db.on('error', ()=> {
        console.log('Failed to connect to mongoose')
    })
        .once('open', () => {
            console.log('Connected to mongoose')
        });
}

const typeDefs = `
  scalar DateTime,
enum ProductCategory {
    STYLE
    FOOD
    TECH
    SPORT
    },
enum SortingValue {
    createdAt
    price
    },
enum SortingOrder {
    asc
    desc
    },
input CreateProductInput {
    name : String!,
    description : String,
    price : Float!,
    category: ProductCategory!
    },
input CreateCommentInput {
    title: String!,
    body: String,
    stars: Int!
    }
type Comment {
    _id: ID!,
    title: String!,
    body: String,
    stars: Int!,
    date: DateTime!
    },
type Product {
    _id: ID!,
    name: String!,
    createdAt: DateTime!,
    description: String,
    price: Float!,
    comments (numberOfLastRecentComments: Int) : [Comment],
    category: ProductCategory!,
    stars: Float
    },
input FilterProductInput {
    categories: [ProductCategory],
    minStars: Int,
    minPrice: Float,
    maxPrice: Float
    },
input SortProductInput {
    value: SortingValue!,
    order: SortingOrder!
    },
type Query {
    products (filter: FilterProductInput, sort: SortProductInput) : [Product],
    product (id: ID!) : Product,
    },
type Mutation {
    createProduct (createProductInput: CreateProductInput!) : Product,
        createComment (
        createCommentInput: CreateCommentInput!,
        productId: ID!
        ) : Comment
    }
`

const resolvers = {
    Query: {
        products: (parent, args, context, info) => {

        },
        product: (parent, args, context, info) => {

        }
    },
    Mutation: {
        createComment: (parent, args, context, info) => {

        } ,
        createProduct: (product, args, context, info) => {

        }

    }

}

const schema = makeExecutableSchema({typeDefs, resolvers})

const app = express()
app.use("/graphql", graphqlHTTP({schema: schema, graphiql: true}))
const conn = ConnectDatabase();
app.listen(3000)

/*
sample Query for product:
{
  product(id:0){
       name,
    createdAt,
    description,
    price,
    category ,
    stars ,
  }
}

mutation{
    createProduct(createProductInput:{name: "Pizza", description: "Food", price: 20, category: FOOD}) {
    _id,
    name,
    createdAt,
    description,
    price,
    category,
    stars

    }

}

query {
  products(filter:{categories:FOOD,minStars:0,minPrice:10,maxPrice:60},sort:{value:price ,order:asc}){
      name,
    createdAt,
    description,
    price,
    category,
    stars
  }
}



 */