const User = require("../models/user");

const UsersController = {
  Create: (req, res) => {
    const user = new User(req.body);
    console.log(user);
    user.save((err) => {
      if (err) {
        res.status(400).json({message: 'Bad request'})
      } else {
        res.status(201).json({ message: 'OK' });
      }})},
  Index: (req, res) => {
      User.find((err, users) => {
        if (err) {
          throw err;
        }
        const token = TokenGenerator.jsonwebtoken(req.user_id)
        console.log("Generated Token:", token);
        res.status(200).json({ users: users, token: token });
      });
    }
  };

module.exports = UsersController;
