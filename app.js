require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/routes");

const app = express();
const { DATABAZE_URL, PORT } = process.env;

// middlewares

app.use(express.json());
app.use("/api/v1/products", router);

mongoose.connect(DATABAZE_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log('App is up and running')
    })
  })
  .catch((error) => {
    console.log(error);
  })
