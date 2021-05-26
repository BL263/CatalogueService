import mongoose from "mongoose";
const Schema = mongoose.Schema;
import { composeWithMongoose } from "graphql-compose-mongoose";
const Comment = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
        stars: {
            type: Number,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now,
            required: true,
        },
    }
);

export default {
    Comment:Comment,
  CommentSchema: mongoose.model("comments", Comment),
  CommentTC: composeWithMongoose(mongoose.model("comments", Comment)),
};
