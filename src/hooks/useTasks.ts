import { useEffect, useState } from "react";
import { Task } from "@/types";
import { seedTasks } from "@/utils/seed";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    if (tasks.length === 0) {
      setTasks(seedTasks);
    }
  }, []);

  const addTask = (task: Task) => {
    setTasks(prev => [task, ...prev]);
  };

  const updateTask = (updated: Task) => {
    setTasks(prev =>
      prev.map(t => (t.id === updated.id ? updated : t))
    );
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
  };
}
