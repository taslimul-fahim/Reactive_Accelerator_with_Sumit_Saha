import { useImmerReducer } from "use-immer";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/tasks";
import taskReducer from "./reducers/taskReducer";
import { TasksContext, TasksDispatchContext } from "./contexts/TasksContext";

export default function App() {
  const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        <h1>Prague itinerary</h1>
        <AddTask />

        <TaskList />
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}
