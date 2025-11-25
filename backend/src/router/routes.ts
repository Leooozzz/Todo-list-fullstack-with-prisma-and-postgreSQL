import { Router } from "express";
import {
  todoListDelete,
  todoListget,
  todoListPost,
  todoListPut,
} from "../controller/todo.controller.js";

const router = Router();


router.get("/todoList", todoListget);
router.post("/todoList", todoListPost);
router.put("/todoList/:id", todoListPut);
router.delete("/todoList/:id", todoListDelete);



export default router;
