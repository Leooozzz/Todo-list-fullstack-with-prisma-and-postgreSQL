"use client";

import { useState } from "react";
import { postTask, getTask } from "@/app/api/api";
import { Task } from "@/app/types/typeTask";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

type FormTaskProps = {
  setTask: React.Dispatch<React.SetStateAction<Task[]>>;
};

export const FormTask = ({ setTask }: FormTaskProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("Segunda");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await postTask({ title, description, dayOfWeek });
    const updated = await getTask();
    setTask(updated);
    setTitle("");
    setDescription("");
    setDayOfWeek("Segunda");
  };

  return (
    <Card className="max-w-xl mx-auto mt-6">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          Criar Nova Tarefa
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label>Título</Label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Digite o título da tarefa"
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Descrição</Label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Adicione uma breve descrição"
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Dia da Semana</Label>
            <Select value={dayOfWeek} onValueChange={setDayOfWeek}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o dia" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Segunda">Segunda</SelectItem>
                <SelectItem value="Terca">Terça</SelectItem>
                <SelectItem value="Quarta">Quarta</SelectItem>
                <SelectItem value="Quinta">Quinta</SelectItem>
                <SelectItem value="Sexta">Sexta</SelectItem>
                <SelectItem value="Sabado">Sábado</SelectItem>
                <SelectItem value="Domingo">Domingo</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full">
            Adicionar Tarefa
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
