import mongoose from "mongoose";
import {composeWithMongoose} from "graphql-compose-mongoose";
const Schema = mongoose.Schema;

const Filter = new Schema(
    {
        maxPrice: {
            type: Number,
        },
        minPrice: {
            type: Number,
        },
        minStars: {
            type: Number,
        },
        category:[{
            type: String
        }] ,
    }
);

export default {
    FilterSchema: mongoose.model("filters", Filter),
    FilterTC: composeWithMongoose(mongoose.model("filters", Filter)),
};

