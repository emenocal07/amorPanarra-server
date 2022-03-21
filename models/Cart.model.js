const { Schema, model } = require("mongoose")

const cartSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },

        productsCart: [
            {
                product: {
                    type: Schema.Types.ObjectId,
                    ref: 'Product'
                },
                quantity: Number
            }
        ]
    },
    {
        timestamps: true,
    }
)

const Cart = model("Cart", cartSchema)

module.exports = Cart