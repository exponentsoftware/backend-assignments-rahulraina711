const express = require("express");
const router = express.Router();
const todo_controller = require("../controllers/todos_controller");

router.get("/", todo_controller.get_all_todos);

router.get("/:id", todo_controller.get_todo_by_id);

router.post("/", todo_controller.create_a_todo);

router.patch("/:id", todo_controller.update_by_id);

router.delete("/:id", todo_controller.delete_by_id);

module.exports = router;