const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const uploadCloud = require("../config/cloudinary");

const salt = 10;

const getAge = (birthDate) =>
  Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);

router.post("/signin", (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((userDocument) => {
      if (!userDocument) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const isValidPassword = bcrypt.compareSync(
        password,
        userDocument.password
      );
      if (!isValidPassword) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      req.session.currentUser = userDocument._id;
      res.redirect("/api/auth/isLoggedIn");
    })
    .catch(next);
});

router.post("/signup", uploadCloud.single("profileImage"), (req, res, next) => {
  const { email, password, firstName, lastName, birthday } = req.body;

  User.findOne({ email })
    .then((userDocument) => {
      if (userDocument) {
        return res.status(400).json({ message: "Email already taken" });
      }
      getAge(birthday);
      if (getAge(birthday) < 18) {
        return res.status(400).json({ message: "Too young to use this app" });
      }

      const hashedPassword = bcrypt.hashSync(password, salt);
      const newUser = {
        email,
        lastName,
        birthday,
        firstName,
        password: hashedPassword,
      };

      if (req.file) {
        console.log(req.file);
        newUser.profileImage = req.file.path;
      }
      console.log(newUser);
      User.create(newUser)
        .then((newUserDocument) => {
          /* Login on signup */
          req.session.currentUser = newUserDocument._id;
          res.redirect("/api/auth/isLoggedIn");
        })
        .catch(next);
    })
    .catch(next);
});

router.get("/isLoggedIn", (req, res, next) => {
  if (!req.session.currentUser)
    return res.status(401).json({ message: "Unauthorized" });

  const id = req.session.currentUser;
  User.findById(id)
    .select("-password")
    .then((userDocument) => {
      res.status(200).json(userDocument);
    })
    .catch(next);
});

router.get("/logout", (req, res, next) => {
  req.session.destroy(function (error) {
    if (error) next(error);
    else {
      res.status(200).json({ message: "Succesfully disconnected." });
    }
  });
});

module.exports = router;
