import type { RequestHandler } from "express";
import { prisma } from "../libs/prisma.js";

export const todoListget: RequestHandler = async (req, res) => {
  try {
    const taks = await prisma.task.findMany({
      orderBy: [{ dayOfWeek: "asc" }, { title: "asc" }],
    });
    res.json(taks);
  } catch (error) {
    return res.status(500).json({ error: "Error to find taks" });
  }
};

export const todoListPost: RequestHandler = async (req, res) => {
  try {
    const { title, description, dayOfWeek } = req.body;
    if (!title || !dayOfWeek) {
      return res
        .status(400)
        .json({ message: "Title and Day of Week is required" });
    }
    const task = await prisma.task.create({
      data: {
        title,
        description,
        dayOfWeek,
      },
    });
    return res.status(201).json({ task });
  } catch (error) {
    return res.status(500).json({ error: "Error to create new task" });
  }
};

export const todoListPut: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Id is required" });
    }
    const { title, description, dayOfWeek, isDone } = req.body;
    const task = await prisma.task.update({
      where: { id },
      data: { title, description, dayOfWeek, isDone },
    });
    res.json(task);
  } catch (error) {
    return res.status(404).json({ error: "task not find" });
  }
};

export const todoListDelete: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.task.delete({ where: { id } });
    return res.status(200).json({ message: "task removed with sucess" });
  } catch (error) {
    return res.status(404).json({ error: "ID is required" });
  }
};
