import React, { useState } from "react";

const Add = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState(""); // State for task name
  const [difficulty, setDifficulty] = useState(""); // State for difficulty level

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName && difficulty) {
      onAddTask({ taskName, difficulty }); // Call the parent function to add task
      setTaskName(""); // Clear the input after submitting
      setDifficulty("");
    }
  };

  return (
    <>
      <div className="h-[400px] w-[340px] ml-2 bg-white dark:bg-neutral-700 text-white">
        <form onSubmit={handleSubmit}>
          <div className="mb-4 w-full">
            <label htmlFor="taskName"></label>
            <input
              placeholder="Task Name"
              type="text"
              id="taskName"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className="w-full block rounded-lg border dark:border-none dark:bg-neutral-600 py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div className="flex justify-evenly">
            <div className="flex justify-center items-center mb-4">
              <input
                type="radio"
                id="easy"
                name="type"
                value="Easy"
                checked={difficulty === "Easy"}
                onChange={() => setDifficulty("Easy")} // Update difficulty
                className="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-500 dark:ring-offset-gray-700 focus:ring-1 dark:bg-gray-700 dark:border-gray-600 hover:cursor-pointer"
              />
              <label
                htmlFor="easy"
                className="ms-2 text-sm font-medium text-gray-800 dark:text-gray-300 hover:cursor-pointer"
              >
                Easy
              </label>
            </div>

            <div className="flex justify-center items-center mb-4">
              <input
                type="radio"
                id="medium"
                name="type"
                value="Medium"
                checked={difficulty === "Medium"}
                onChange={() => setDifficulty("Medium")}
                className="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-500 dark:ring-offset-gray-700 focus:ring-1 dark:bg-gray-700 dark:border-gray-600 hover:cursor-pointer"
              />
              <label
                htmlFor="medium"
                className="ms-2 text-sm font-medium text-gray-800 dark:text-gray-300 hover:cursor-pointer"
              >
                Medium
              </label>
            </div>

            <div className="flex justify-center items-center mb-4">
              <input
                type="radio"
                id="hard"
                name="type"
                value="Hard"
                checked={difficulty === "Hard"}
                onChange={() => setDifficulty("Hard")}
                className="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-500 dark:ring-offset-gray-700 focus:ring-1 dark:bg-gray-700 dark:border-gray-600 hover:cursor-pointer"
              />
              <label
                htmlFor="hard"
                className="ms-2 text-sm font-medium text-gray-800 dark:text-gray-300 hover:cursor-pointer"
              >
                Hard
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="block mb-4 w-full rounded-full bg-blue-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-blue-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Add;
