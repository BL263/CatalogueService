import mongoose from "mongoose";
import {composeWithMongoose} from "graphql-compose-mongoose";
const Schema = mongoose.Schema;

const Sort = new Schema(
    {
        SortingValue: {
            type: String,
            enum: ["createdAt", "price"],
            required: true,
        },
        SortingOrder: {
            type: String,
            enum: ["asc", "desc"],
            required: true,
        },
    }
);

export default {
    SortSchema: mongoose.model("sorts", Sort),
    SortTC: composeWithMongoose(mongoose.model("sorts", Sort)),
};

