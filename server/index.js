const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const postRoute = require("./routes/postRouter");

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
dotenv.config();

let port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
app.use("/api/post", postRoute);

const mongoURL = process.env.MONGO_URL;
let connectToDb = async () => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(() => {
      console.log("Connected to mongodb database.")
    })
  } catch (err) {
    console.log(err);
  }
}
connectToDb();

