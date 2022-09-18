const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema({
  quote: { type: String, required: true, unique: true },
  author: { type: String },
  likes: [String],
  dislikes: [String],
  categories: [String],  
},
  { timestamps: true }
);
module.exports = mongoose.model("Post", PostSchema);