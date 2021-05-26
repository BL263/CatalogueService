import mongoose from "mongoose";
import {composeWithMongoose} from "graphql-compose-mongoose";
import Comment from "./comment.js"
const Schema = mongoose.Schema;

const Product = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            required: true,
        },
        description: String,
        price: {
            type: Number,
            required: true,
        },
        comments: [Comment.Comment],
        category: {
            type: String,
            enum: ["STYLE", "FOOD", "TECH", "SPORT","OTHER"],
            required: true,
        },
        star: Number,
    }
);

export default {
    ProductSchema: mongoose.model("products", Product),
    ProductTC: composeWithMongoose(mongoose.model("products", Product)),
};
