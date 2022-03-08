const { Schema, model } = require("mongoose")

const productSchema = new Schema(
    {
        name: String,
        description: String,
        ingredients: String,
        price: Number,
        weight: Number,
        image: String,
        category: {
            type: String,
            enum: ['Panes', 'Dulces'],
            default: 'Panes'
        },
        glutenfree: Boolean,
        featured: Boolean,
    },
    {
        timestamps: true,
    }

)

const Product = model("Product", productSchema)

module.exports = Product