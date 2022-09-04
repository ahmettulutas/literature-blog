const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema({
  quote: { type: String, required: true, unique: true },
  author: { type: String },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  categories: [String]
},
  { timestamps: true }
);
module.exports = mongoose.model("Post", PostSchema);