const Post = require("../models/post");

const router = require("express").Router();

// creating new post;
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    await newPost.save();
    res.status(200).json({
      status: "Success",
      data: {
        newPost
      }
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err
    });
  }
});

// updating the post;
router.put("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
      $set: req.body
    },
      { new: true }
    );
    res.status(200).json({
      status: "Success",
      data: {
        updatedPost
      }
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err
    })
  }
});

// Delete a post 
router.delete("/", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id)
    res.status(200).json({
      status: "Success",
      message: "Deleted"
    });

  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err
    })
  }
});

// get all the posts
router.get("/get-all", async (req, res) => {
  try {
    const allPost = await Post.collection.find({}).toArray();
    res.status(200).json({
      status: "Success",
      data: allPost
    })
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err
    })
  }
})

module.exports = router;