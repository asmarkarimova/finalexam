const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

dotenv.config();
const DB = process.env.DB_URL;
mongoose.connect(DB, { useNewUrlParser: true });

const app = express();
app.use(cors());
app.use(bodyParser.json());
const { Schema } = mongoose;

const cardSchema = new Schema(
  {
    image: {
      type: String,
    },
    category: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Card = mongoose.model("card", cardSchema);

//!Get All Cards
app.get("/cards", async (req, res) => {
  const getCard = await Card.find({});
  res.send(getCard);
});

//! Post Card
app.post("/cards", async (req, res) => {
  const getBody = req.body;
  const postCard = await new Card(getBody);
  postCard.save();
  res.send(postCard);
});

const Port = process.env.PORT;
app.listen(Port, () => {
  console.log("port is up");
});
