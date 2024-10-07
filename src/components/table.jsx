import React, { useState } from "react";
import Add from "./add";

const Table = () => {
  const [tasks, setTasks] = useState([]); 

  const handleAddTask = (task) => {
    setTasks([...tasks, task]); 
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index); 
    setTasks(updatedTasks);
  };

  const handleTaskDone = (index) => {
    const updatedTasks = tasks.map((task, taskIndex) =>
      taskIndex === index ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="overflow-x-auto bg-white dark:bg-neutral-700 text-white h-[400px] w-[1000px]">
        <table className="min-w-full text-left text-xs whitespace-nowrap">
          <thead className="uppercase tracking-wider border-b-2 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-800">
            <tr>
              <th scope="col" className="px-6 py-4">
                Task Name
              </th>
              <th scope="col" className="px-6 py-4">
                Difficulty
              </th>
              <th scope="col" className="px-6 py-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index} className={`${task.done ? "line-through" : ""}`}>
                <td className="px-6 py-4">{task.taskName}</td>
                <td className="px-6 py-4">{task.difficulty}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleTaskDone(index)}
                    className="mr-2 w-[50px] bg-white text-black"
                  >
                    {task.done ? "Undone" : "Done"}
                  </button>
                  <button
                    onClick={() => handleDeleteTask(index)}
                    className="w-[50px] bg-white text-black"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className=""><Add onAddTask={handleAddTask} /></div>
    </>
  );
};

export default Table;
