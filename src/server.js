import express from 'express';
const app = express();
import mongoose from 'mongoose';
//import logger from "./core/logger"
import {graphqlHTTP} from "express-graphql";

import graphqlSchema from "./schemas/index.js";
import {} from 'dotenv/config'


const extensions = ({ context }) => {
  return {
    runTime: Date.now() - context.startTime,
  };
};

//app.use(logger);

app.listen(process.env.port, async () => {
  console.log("server is running ", process.env.port);
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

mongoose.connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);

app.use(
  "/graphql",
  graphqlHTTP((request) => {
    return {
      context: { startTime: Date.now() },
      graphiql: true,
      schema: graphqlSchema,
      extensions,
    };
  })
);


/*
Query sample
query{
  productCount
}
query{
  productMany{
    name
    price
    category
  }
}



 */