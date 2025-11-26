import axios from "axios";
import { Task } from "../types/typeTask";

const api = axios.create({
  baseURL: "http://localhost:5000",
});


export const getTask = async (): Promise<Task[]> => {
  try {
    const res = await api.get("/todoList");
    return res.data;
  } catch (error) {
    console.error("Request error", error);
    return [];
  }
};

export const postTask = async (task: {
  title: string;
  description: string;
  dayOfWeek: string;
}) => {
  try {
    const res = await api.post("/todoList", task);
    return res.data;
  } catch (error) {
    console.error("Error when create task", error);
  }
};

export const updateTask = async (
  id: string,
  updates: { title: string; description: string; isDone: boolean }
) => {
  try {
    const res = await api.put(`/todoList/${id}`, updates);
    return res.data;
  } catch (error) {
    console.error("Error to edit task", error);
  }
};

export const deletedTask = async (id: string) => {
  try {
    const res = await api.delete(`/todoList/${id}`);
    return res.data;
  } catch (error) {
    console.error(`Error for deleted Task`, error);
  }
};
