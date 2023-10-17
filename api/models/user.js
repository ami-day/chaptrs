const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  location: { type: String, required: true },
  date_joined: { type: String, required: true },
  profile_picture: { type: String, required: false }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
