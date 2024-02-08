
import Task from "./Task";

const TaskLists = ({ tasks, onChanged , onDelete}) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task onChanged={onChanged} onDelete={onDelete} key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskLists;
