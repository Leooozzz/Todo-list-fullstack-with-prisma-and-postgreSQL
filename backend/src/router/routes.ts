import { Router } from "express";
import {
  todoListDelete,
  todoListget,
  todoListPost,
  todoListPut,
} from "../controller/todo.controller.js";
import { validate } from "../middleware/validate.task.js";
import { postTaskSchema, updateTaskSchema } from "../schemas/task.schema.js";

const router = Router();

router.get("/todoList", todoListget);
router.post("/todoList", validate(postTaskSchema), todoListPost);
router.put("/todoList/:id", validate(updateTaskSchema), todoListPut);
router.delete("/todoList/:id", todoListDelete);

export default router;
