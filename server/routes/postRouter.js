const Post = require("../models/post");

const router = require("express").Router();

// creating new post;
router.post("/", async (req, res) => {
  const data = new Post(req.body);
  try {
    await data.save();
    res.status(200).json({
      status: "Successfully created.",
      data
    });
  } catch (err) {
    res.status(500).json({
      status: "An error occured.",
      message: err
    });
  }
});

// updating the post;
router.put("/:id", async (req, res) => {
  let [key] = Object.keys(req.body); // "like" or "dislike"
  try {
    let dataToUpdate = await Post.findById(req.params.id);
    let data;
    if (dataToUpdate[key].length) {
      // Checks if the user id is already in list.
      data = await Post.findByIdAndUpdate(req.params.id, {
      // addToSet pushes only unique values to a nested array.
      $addToSet: {[key]: req.body[key]}
      },
      {new:true}
      )
    }
    else {
      data = await Post.findByIdAndUpdate(req.params.id, {
        $push: {[key]: req.body[key]}
      },
      {new:true}
      );
    };
    res.status(200).json({
      status: "Successfully updated.",
      data
    }); 
    } catch (err) {
    res.status(500).json({
      status: "An error occured.",
      message: err
    })
  };
});

// Delete a post 
router.delete("/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id)
    res.status(200).json({
      status: "Successfully deleted.",
      message: "Deleted"
    });

  } catch (err) {
    res.status(500).json({
      status: "An error occured.",
      message: err
    })
  }
});

// get all the posts
router.get("/get-all", async (_, res) => {
  try {
    Post.collection.dropIndex("id_1");
    const allPost = await Post.collection.find({}).toArray();
/*     let mutatedAllPost = allPost.map(item => {
      let { likes, dislikes } = item;
      return {...item, likesCount:likes.length, dislikesCount:dislikes.length}
    }) */
    res.status(200).json({
      status: "Success",
      data: allPost
    })
  } catch (err) {
    res.status(500).json({
      status: "An error occured.",
      message: err
    })
  }
})

module.exports = router;