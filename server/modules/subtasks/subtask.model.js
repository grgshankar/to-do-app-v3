const mongoose = require("mongoose");
const { ObjectId } = require("mongoose").Schema;
const commonSchema = require("../../utils/commonSchema");
const SubtaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, enum: ["pending", "completed"] },
  todo: { type: ObjectId, ref: "Todo" },
  ...commonSchema,
});

module.exports = new mongoose.model("Subtask", SubtaskSchema);
