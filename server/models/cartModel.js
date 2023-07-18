const { Schema, model } = require("mongoose");

const CartSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  // user: {
  //   type: String,
  //   ref: 'User',
  //   required: true
  // },

  items: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
         required: true,
      },
      pc: {
        type: Schema.Types.ObjectId,
        ref: "Pc",
        required: true,
      },

      quantity: {
        type: Number,
        required: true,
         default: 1,
      },
    },
  ],

  total: Number,
});

module.exports = model("Cart", CartSchema);
      