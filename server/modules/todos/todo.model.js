const mongoose = require("mongoose");
const commonSchema = require("../../utils/commonSchema");
const TodoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "completed",
  },
  ...commonSchema,
});

module.exports = new mongoose.model("Todo", TodoSchema);
