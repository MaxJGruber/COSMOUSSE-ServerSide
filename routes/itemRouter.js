const express = require("express");
const router = express.Router();
const Item = require("../models/Item");
const uploader = require("../config/cloudinary");

// GET ALL ITEMS

router.get("/items", async (req, res, next) => {
  try {
    const allItems = await Item.find({ added_by: req.session.currentUser });
    res.status(200).json(allItems);
  } catch (error) {
    res.status(500);
    next(error);
  }
});

// GET ONE ITEM

router.get("/item/:id", async (req, res, next) => {
  try {
    const selectedItem = await Item.findById(req.params.id);
    res.status(200).json(selectedItem);
  } catch (error) {
    res.status(500);
    next(error);
  }
});

// CREATE ONE ITEM

router.post(
  "/item/create",
  uploader.single("image"),
  async (req, res, next) => {
    if (req.file) {
      req.body.image = req.file.path;
    }
    try {
      const data = req.body;
      data.added_by = req.session.currentUser;
      const createdItem = await Item.create(data);
      res.status(201).json(createdItem);
    } catch (error) {
      res.status(500);
      next(error);
    }
  }
);

// UPDATE ONE ITEM

router.patch(
  "/item/:id/edit",
  uploader.single("image"),
  async (req, res, next) => {
    if (req.file) {
      req.body.image = req.file.path;
    }
    try {
      const data = req.body;
      data.added_by = req.session.currentUser;
      const updatedItem = await Item.findByIdAndUpdate(req.params.id, data);
      res.status(200).json(updatedItem);
    } catch (error) {
      res.status(500);
      next(error);
    }
  }
);

// DELETE ONE ITEM

router.delete("/item/:id/delete", async (req, res, next) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    res.status(204).json(deletedItem);
  } catch (error) {
    res.status(500);
    next(error);
  }
});

module.exports = router;
