express = require("express");
const router = express.Router();


  const {
    getAllUsers,
    addUser,
    getUserById

  
} = require("../controllers/usersController");

router.route("/").get(getAllUsers).post(addUser);
router
  .route("/:id")
  .get(getUserById)
  
module.exports = router;