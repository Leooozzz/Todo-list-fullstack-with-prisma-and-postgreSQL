"use client"

import { ListTask } from "@/components/listTask"
import { FormTask } from "@/components/postTask"
import { useState } from "react";
import { Task } from "./types/typeTask";

const Page=()=>{
   const [task, setTask] = useState<Task[]>([]);

  return(
    <div>
      <FormTask setTask={setTask} />
      <ListTask task={task} setTask={setTask} />

    </div>
  )
}

export default Page