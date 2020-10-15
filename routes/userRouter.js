const express = require("express");
const router = express.Router();
const User = require("../models/User");
const uploader = require("../config/cloudinary");

// EDIT PROFILE

router.patch("/user/edit", uploader.single("image"), async (req, res, next) => {
  if (req.file) {
    req.body.image = req.file.path;
  }
  try {
    console.log(req.body);
    const updatedUser = await User.findByIdAndUpdate(
      req.session.currentUser,
      req.body,
      { new: true }
    );
    console.log(updatedUser);
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500);
    next(err);
  }
});

// DELETE USER/PROFILE

router.delete("/user/delete", async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.session.currentUser);
    res.sendStatus(200);
  } catch (err) {
    res.status(500);
    next(err);
  }
});

module.exports = router;
