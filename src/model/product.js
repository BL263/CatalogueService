import mongoose from "mongoose";
import {composeWithMongoose} from "graphql-compose-mongoose";
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
        comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Comment",
            },
        ],
        category: {
            type: String,
            enum: ["STYLE", "FOOD", "TECH", "SPORT"],
            required: true,
        },
        star: Number,
    }
);

export default {
    ProductSchema: mongoose.model("products", Product),
    ProductTC: composeWithMongoose(mongoose.model("products", Product)),
};