const express = require("express");
const {
  getCart,
  addCartItem,
  deleteAllCartItems,
  deleteCartItemById,
  updateItemFieldById
} = require("../controllers/cartsController");

const router = express.Router();
router.route("/").get(getCart).post(addCartItem).patch(updateItemFieldById);
router.route("/:id").put(deleteCartItemById).delete(deleteAllCartItems);

module.exports = router;
