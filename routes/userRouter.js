const express = require("express");
const router = express.Router();
const User = require("../models/User");
const uploader = require("../config/cloudinary");
// console.log("Platform = ", platform)

router.get("/user/edit", async (req, res, next) => {
  try {
    // console.log(req.session.currentUser._id)
    const user = await User.findById(req.session.currentUser._id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500);
    next(err);
  }
});

router.patch("/user/edit", uploader.single("image"), async (req, res, next) => {
  if (req.file) {
    req.body.image = req.file.path;
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.session.currentUser._id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500);
    next(err);
  }
});

module.exports = router;
