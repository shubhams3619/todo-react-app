const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const routes = require("./routes/ToDoRoutes")
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.error(err));

  app.use("/api", routes)

app.listen(PORT, () => console.log(`Listening on ${PORT}....`));
