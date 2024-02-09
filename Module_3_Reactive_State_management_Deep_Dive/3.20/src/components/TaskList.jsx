import { useContext } from "react";
import Task from "./Task";
import { TasksContext } from "../contexts/TasksContext";

export default function TaskList() {
  const tasks = useContext(TasksContext);
  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
}
