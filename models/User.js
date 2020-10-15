const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  profileImage: String,
  birthday: { type: Date, required: true },
  profileImage: {
    type: String,
    default:
      "https://chaire_ux.hec.ca/wp-content/uploads/2020/05/82e8596b116c3a262653dc9bb3948b2d_managers-supervisors-el-harvey_960-960.jpeg",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
