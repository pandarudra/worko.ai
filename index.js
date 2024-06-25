const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./config/dbconfig");
require("dotenv").config();
app.use(cors());

// Importing routes
const userrouter = require("./routes/route");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/resource/worko/", userrouter);
connection
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port 3000");
    });
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log("Error in database connection", err);
  });
