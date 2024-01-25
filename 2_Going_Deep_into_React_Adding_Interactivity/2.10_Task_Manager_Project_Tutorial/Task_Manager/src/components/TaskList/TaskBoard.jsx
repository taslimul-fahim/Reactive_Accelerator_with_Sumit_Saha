import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";

const TaskBoard = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    des: "I want to learn react and want to be an expert React developer.",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavorite: true,
  };
  const [tasks, setTask] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <section className="mb-20" id="tasks">
      {showAddModal && <AddTaskModal/>}
      <div className="container">
        <SearchTask />
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions onAddClick={()=>setShowAddModal(true)} />
          <TaskList key={tasks.id} tasks={tasks} />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
