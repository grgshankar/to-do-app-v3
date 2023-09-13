const router = require("express").Router();
const todoController = require("./todo.controller");

// create
router.post("/", async (req, res, next) => {
  try {
    const result = await todoController.create(req.body);
    res.json({ data: result, msg: "success" });
  } catch (error) {
    next(error);
  }
});

// get by id
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await todoController.getById(id);
    res.json({ data: result, msg: "success" });
  } catch (error) {
    next(error);
  }
});

// list all
router.get("/", async (req, res, next) => {
  try {
    const result = await todoController.list();
    res.json({ data: result, msg: "success" });
  } catch (error) {
    next(error);
  }
});

// updateById
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { payload } = req.body;
    const result = await todoController.getById(id, payload);
    res.json({ data: result, msg: "success" });
  } catch (error) {
    next(error);
  }
});
// delete
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await todoController.remove(id);
    res.json({ data: result, msg: "success" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
