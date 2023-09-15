const Model = require("./todo.model");
// create
const create = async (payload) => {
  return await Model.create(payload);
};
// finding data by id
const getById = async (id) => {
  return await Model.findOne({ _id: id });
};
// finding all the content from the database
const list = async () => {
  return await Model.aggregate([
    {
      $lookup: {
        from: "subtasks",
        localField: "_id",
        foreignField: "todo",
        as: "subtasks",
      },
    },
  ]);
};
// updating the data
const updateById = async (id, payload) => {
  return await Model.findOneAndUpdate({ _id: id }, payload, { new: true });
};
// removing or deleting the data by id
const remove = async (id) => {
  return await Model.deleteOne({ _id: id });
};

module.exports = { create, getById, list, updateById, remove };
