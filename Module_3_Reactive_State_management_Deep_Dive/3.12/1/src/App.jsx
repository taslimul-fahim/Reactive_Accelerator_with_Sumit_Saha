import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/data";

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const getLastId = (data) => {
    const maxId = data.reduce((prev, curr) =>
      prev && prev > curr.id ? prev.id : curr.id
    );
    return maxId + 1;
  };

  //  Handlers
  const handleAddTask = (text) => {
    setTasks([...tasks, { id: getLastId(tasks), text: text, done: false }]);
  };

  const handleChangeTask = (task) => {
    const nextTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    });
    setTasks(nextTasks);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAdd={handleAddTask} />
      <TaskList
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
        tasks={tasks}
      />
    </>
  );
}

export default App;
