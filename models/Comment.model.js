const { Schema, model } = require("mongoose")

const commentSchema = new Schema(
    {
        date: {
            type: Date,
        },

        text: {
            type: String,
            minlength: 1,
            maxlength: 150,
            trim: true
        },

        rating: {
            type: Number,
            min: 1.0,
            max: 5.0,
        },

        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },

        product: {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }

    },
    {
        timestamps: true
    }
);

const Comment = model("Comment", commentSchema)

module.exports = Comment