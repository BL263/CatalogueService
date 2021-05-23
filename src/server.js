import express from 'express';
const app = express();
import mongoose from 'mongoose';
//import logger from "./core/logger"
import {graphqlHTTP} from "express-graphql";

import graphqlSchema from "./schemas/index.js";

const extensions = ({ context }) => {
  return {
    runTime: Date.now() - context.startTime,
  };
};

//app.use(logger);

app.listen(3000, async () => {
  console.log("server is running ", 3000);
  await mongoose.connect("mongodb+srv://admin:Aa123456@catalogueservice.ti9p1.mongodb.net/catalog", {
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