import mongoose from "mongoose";
import {composeWithMongoose} from "graphql-compose-mongoose";
const Schema = mongoose.Schema;

const Filter = new Schema(
    {
        maxPrice: {
            type: Number,
            required: true,
        },
        minPrice: {
            type: Number,
            required: true,
        },
        minStars: {
            type: Number,
            required: true,
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

