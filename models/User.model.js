const { Schema, model } = require("mongoose")

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      minlength: 2,
      maxlength: 20,
      trim: true
    },
    userlastname: {
      type: String,
      unique: true,
      required: true,
      minlength: 2,
      maxlength: 20,
      trim: true
    },

    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    address: {

      street: {
        name: {
          type: String,
          required: true
        },

        number: {
          type: Number,
          required: true
        },
      },

      postCode: {
        type: Number,
        required: true
      },

      city: {
        type: String,
        required: true
      },

      country: {
        type: String,
        required: true,
        default: 'Spain'
      }
    },

    role: {
      type: String,
      enum: ['ADMIN', 'USER'],
      default: 'USER',
      required: true,
    },

    productsCart: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: 'Product'
        },
        quantity: {
          type: Number,
          default: 1
        }
      }
    ]
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
