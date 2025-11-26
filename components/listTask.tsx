"use client";

import { deletedTask, getTask, updateTask } from "@/app/api/api";
import { Task } from "@/app/types/typeTask";
import { useEffect, useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

type ListTaskProps = {
  task: Task[];
  setTask: React.Dispatch<React.SetStateAction<Task[]>>;
};

export const ListTask = ({ task, setTask }: ListTaskProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getTask()
      .then(setTask)
      .catch(() => setError("Erro ao carregar tarefas"))
      .finally(() => setLoading(false));
  }, [setTask]);

  return (
    <section className="max-w-xl mx-auto mt-6 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex justify-between items-center">
            Lista de Tarefas
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {loading && (
            <div className="space-y-3">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
            </div>
          )}

          {error && <p className="text-red-500">{error}</p>}

          {!loading && !error && task.length === 0 && (
            <p className="text-muted-foreground">Nenhuma tarefa encontrada</p>
          )}

          <ul className="space-y-4">
            {task.map((t) => (
              <li
                key={t.id}
                className="p-4 rounded-lg border flex justify-between items-center"
              >
                <div>
                  <p className="font-medium">{t.title}</p>
                  <p className="text-sm"> {t.description}</p>
                  <p className="text-sm text-muted-foreground">{t.dayOfWeek}</p>

                  <Badge
                    variant={t.isDone ? "default" : "secondary"}
                    className="mt-2"
                  >
                    {t.isDone ? "Concluída" : "Pendente"}
                  </Badge>
                </div>

                <div className="flex border-black items-center gap-2">
                  <Button
                    variant="outline"
                    onClick={async () => {
                      await updateTask(t.id, { ...t, isDone: !t.isDone });
                      const updated = await getTask();
                      setTask(updated);
                    }}
                  >
                    Toggle
                  </Button>

                  <Button
                    variant="destructive"
                    onClick={async () => {
                      await deletedTask(t.id);
                      const updated = await getTask();
                      setTask(updated);
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};
