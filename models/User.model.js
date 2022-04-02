const { Schema, model } = require("mongoose")

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Debe introducir un nombre obligatoriamente'],
      minlength: 2,
      maxlength: 20,
      trim: true
    },
    userlastname: {
      type: String,
      required: [true, 'Debe introducir un apellido obligatoriamente'],
      minlength: 2,
      maxlength: 20,
      trim: true
    },

    email: {
      type: String,
      unique: [true, 'Debe introducir un email obligatoriamente'],
      required: true,
    },
    phone: {
      type: Number,
      required: [true, 'Debe introducir un teléfono obligatoriamente'],
    },

    password: {
      type: String,
      required: [true, 'Debe introducir una contraseña obligatoriamente'],
    },

    address: {

      street: {
        name: {
          type: String,
          required: [true, 'Debe introducir una calle obligatoriamente'],
        },

        number: {
          type: Number,
          required: [true, 'Debe introducir un número obligatoriamente'],
        },
      },

      postCode: {
        type: Number,
        required: [true, 'Debe introducir un código postal obligatoriamente'],
      },

      city: {
        type: String,
        required: [true, 'Debe introducir una ciudad obligatoriamente'],
      },

      country: {
        type: String,
        required: [true, 'Debe introducir un pais obligatoriamente'],
        default: 'Spain'
      }
    },

    role: {
      type: String,
      enum: ['ADMIN', 'USER'],
      default: 'USER',
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
