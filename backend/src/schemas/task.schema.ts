import z from "zod";

export const dayOfWeek = z.enum([
  "Segunda",
  "Terca",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sabado",
  "Domingo",
]);

export const postTaskSchema = z.object({
  title: z.string().min(1, "Minimun 1 character"),
  description: z.string(),
  isDone: z.boolean().optional(),
  dayOfWeek: dayOfWeek,
});

export const updateTaskSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  isDone: z.boolean().optional(),
  dayOfWeek: dayOfWeek.optional(),
});
