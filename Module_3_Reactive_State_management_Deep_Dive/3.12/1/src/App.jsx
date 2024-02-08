import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/data";
import taskReducer from "./reducers/taskReducer";
import { useImmerReducer } from "use-immer";

function App() {
    const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);

  const getLastId = (data) => {
    const maxId = data.reduce((prev, curr) =>
      prev && prev > curr.id ? prev.id : curr.id
    );
    return maxId + 1;
  };

  //  Handlers
  const handleAddTask = (text) => {
    dispatch({
      type: "added",
      text,
      id: getLastId(tasks),
    });
  };

  const handleChangeTask = (task) => {
    dispatch({
      type: "changed",
      task,
    });
  };

  const handleDeleteTask = (taskId) => {
    dispatch({
      type: "deleted",
      id: taskId,
    });
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
