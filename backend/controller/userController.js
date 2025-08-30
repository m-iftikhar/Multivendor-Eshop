
const express = require("express");
const path = require("path");
const { upload } = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const router = express.Router();
const User = require("../model/user");
// const bcrypt = require("bcryptjs");
// 


router.post(
  "/create-user",
  upload.single("file"),
  async (req, res, next) => {
    try {
      const { name, email, password } = req.body;

      const existingUser = await User.findOne({ email });
      if (existingUser)
        return next(new ErrorHandler("User already exists", 400));

      if (!req.file)
        return next(new ErrorHandler("Please upload an avatar", 400));

      const newUser = await User.create({
        name,
        email,
        password,
        avatar: {
          public_id: req.file.filename,
          url: `/uploads/${req.file.filename}`,
        },
      });

      res.status(201).json({ success: true, newUser });
    } catch (error) {
      next(error);
    }
  }
);


module.exports = router;