import AddTask from "./components/AddTask";
import TaskLists from "./components/TaskLists";
import { useState } from "react";
import { initialTasks } from "./components/data/data.js";

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const lastId = (data) => {
    data.reduce((prev, curr) => (prev && prev > curr.id ? prev.id : curr.id));
  };

  const handleAddTask = (text) => {
    setTasks([...tasks, { id: lastId(tasks), text: text, done: false }]);
  };

  const handleChangeTask = (task) => {
    setTasks(
      tasks.map((t) => {
        if (t.id === task) {
          return task;
        } else {
          return t;
        }
      }),
    );
  };

  const handleDeleteTask = (taskId) => {
    
  }

  return (
    <>
      <h3>Prague itinerary</h3>
      <AddTask onChanged={handleChangeTask} onAdd={handleAddTask} />
      <TaskLists tasks={tasks} />
    </>
  );
}

export default App;
