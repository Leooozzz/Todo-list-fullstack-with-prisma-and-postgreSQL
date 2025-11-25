import { Router } from "express";

const router = Router();

router.get("/todoList");
router.post("todoList");
router.put("/todoList/:id");
router.delete("/todoList/:id");
export default router;
