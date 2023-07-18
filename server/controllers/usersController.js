const User = require('../models/userModel');
const { isValidId, resourceNotFound } = require('../middleware/errorHandlers');
const { successHandler } = require('../middleware/successHandler');

exports.getAllUsers = async (req, res, next) => {
    
    try {
        const users = await User.find();
        const userData = users.map((user) => user.getPublicFields());

        successHandler(res, 200, users)
      } catch (error) {
        next(error);
      }
    
  };
  


  exports.getUserById = async (req, res, next) => {
    const { id } = req.params;
  
    try {
      isValidId(req);
      const user = await User.findById(id);
      resourceNotFound(user, 'user', 'get');
  
      res.status(200).json({
        message: "success",
        data: { user: user.getPublicFields() },
      });
    } catch (error) {
      next(error);
     
    }
  };
  

exports.addUser = async (req, res, next) => {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(200).json(user.getPublicFields());
    } catch (error) {
      console.log(error);
    }
  };
  