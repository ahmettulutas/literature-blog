const Post = require("../models/Post");

const router = require("express").Router();

// creating new post;
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    await newPerson.save();
    res.status(201).json({
      status: "Success",
      data: {
        newPerson
      }
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err
    });
  }
});
module.exports = router;