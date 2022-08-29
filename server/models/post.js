const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema({
  quote: { type: String, required: true },
  author: { type: String },
  likes: { type: Number },
  dislikes: { type: Number }
},
  { timestamps: true }
);
module.exports = mongoose.model("Post", PostSchema);