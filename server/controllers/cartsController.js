const Cart = require("../models/cartModel");
// const Product = require("../models/productModel");
// const User= require("../models/userModel");

// exports.createCart = async (req, res, next) => {
//   console.log("create cart runs!");
//   try {
//     const cart = await Cart.findOne({ user: req.user._id })
//       .populate("items.product")
//       .populate("items.pc")
//       .populate("")
//       ;

//     if (cart) {
//       return res.status(200).json({
//         status: 200,
//         message: "success",
//         data: cart,
//       });
//     }

//     const newCart = new Cart({
//       items: [],
//       total: 0,
//     });

//     console.log("newCart ->", newCart);
//     await newCart.save();

//     res.status(200).json({
//       status: 200,
//       message: "success",
//       data: cart,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

 exports.getCart = async (req, res, next) => {
  try {
    const cart = await Cart.find()
      .populate("items.product")
      .populate("items.pc");
  

    res.status(200).json({
      status: 200,
      message: "success",
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};

exports.addCartItem = async (req, res, next) => {
  try {
    const { product, pc, quantity, cartId } = req.body;

    const cart = await Cart.findByIdAndUpdate(
      "6454c3566293252cfef11c1c",
      //cartId,
      { $push: { items: { product, pc, quantity } } },
      { new: true, upsert: true }
    )
      .populate("items.product")
      .populate("items.pc");

    res.status(200).json({
      status: 200,
      message: "success",
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};



// exports.addCartItem = async (req, res, next) => {
//   try {
//     const { product, pc, quantity} = req.body;
//       const userEmail = req.body.email; 

//     const user = await User.findOne({ email: userEmail });

//     if (!user) {
//       return res.status(404).json({
//         status: 404,
//         message: 'User not found',
//       });
//     }
//      const userId = User.email;

//     const cart = await Cart.findOneAndUpdate(
//        "fakharafarhan@gmail.com",
//       // userId ,
      
//       //cartId,
//       { $push: { items: { product, pc, quantity } } },
//       { new: true, upsert: true }
//     )
//       .populate("items.product")
//       .populate("items.pc")
//       .populate("user")
//       ;

//     res.status(200).json({
//       status: 200,
//       message: "success",
//       data: cart,
//     });
//   } catch (error) {
//     next(error);
//   }
// };



// exports.addCartItem = async (req, res, next) => {
//   try {
//     const { product, pc, quantity } = req.body;
//     const userEmail = req.params.email;

//     // Find the user by email
//     const cartUser = await User.findOne({ email: "fakharafarhan@gmail.com"});

//     if (!cartUser) {
//       return res.status(404).json({
//         status: 404,
//         message: 'User not found.',
//       });
//     }

//     // Create a new cart item
//     const cartItem = {
//       user: cartUser.email,
//       product,
//       pc,
//       quantity,
//     };

//     // Find the cart associated with the user
//     let cart = await Cart.findOne({ user: cartUser.email });

//     if (!cart) {
//       // If no cart exists for the user, create a new one
//       const newCart = new Cart({
//         user: cartUser.email,
//         items: [cartItem],
//       });

//       cart = await newCart.save();
//     } else {
//       // If a cart exists, add the item to the existing cart
//       cart.items.push(cartItem);
//       cart = await cart.save();
//     }

//     res.status(200).json({
//       status: 200,
//       message: 'Cart item added successfully.',
//       data: cart,
//     });
//   } catch (error) {
//     next(error);
//   }
// };





exports.deleteAllCartItems = async (req, res, next) => {
  try {
    const cart = await Cart.findByIdAndUpdate(
      req.params.id,
      { $set: { items: [] } },
      { new: true }
    );

    res.status(200).json({
      status: 200,
      message: "success",
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteCartItemById = async (req, res, next) => {
  try {
    const cart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $pull: { items: { _id: req.body.itemId }}},
      { new: true }
    );

    res.status(200).json({
      status: 200,
      message: "success",
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};


exports.updateItemFieldById = async (req, res, next) => {
  try {
    const { quantity, productId, pcId, cartId } = req.body;
    const cart = await Cart.findByIdAndUpdate(
      { _id: cartId },
      { $set: { "items.$[item].quantity": quantity } },
      {
        arrayFilters: [{ "item.product": productId }],
        arrayFilters: [{ "item.pc": pcId }],
        new: true,
      }
    );

    res.status(200).json({
      status: 200,
      message: "success",
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};
