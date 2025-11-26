"use client";

import { getTask } from "@/app/api/api";
import { Task } from "@/app/types/typeTask";
import { useEffect, useState } from "react";

export const ListTask = () => {
  const [task, setTask] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getTask()
      .then(setTask)
      .catch(() => setError("Erro ao carregar tarefas"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section>
      <ul>
        {task.map((t) => (
          <li key={t.id}>
            {t.title} - {t.dayOfWeek} - {t.isDone ? "Y" : "N"}
          </li>
        ))}
      </ul>
    </section>
  );
};
