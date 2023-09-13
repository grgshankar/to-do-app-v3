require("dotenv").config();
const express = require("express");
const app = express();
const indexRouter = require("./routes");
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");

// connect db
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("database connected successfully!!!"));

//enable json body
app.use(express.json());
// create routes
app.use("/", indexRouter);
app.use((err, req, res, next) => {
  err = err ? err.toString() : "Something went wrong...";
  res.status(500).json({ data: "", msg: err });
});

app.listen(port, () => {
  console.log("Server started at port 5555");
});
