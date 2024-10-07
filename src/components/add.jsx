import React from "react";

const Add = () => {
  return (
    <>
      <div className="h-[400px] w-[340px] ml-2 bg-white dark:bg-neutral-700 text-white">
        <div class="mb-4 w-full">
          <label for="606ffac6-91ce-4856-b03b-8493cb9be79a"></label>
          <input
            placeholder="Task Name"
            type="text"
            id="606ffac6-91ce-4856-b03b-8493cb9be79a"
            class="w-full block rounded-lg border dark:border-none dark:bg-neutral-600 py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div className="flex justify-evenly">
          <div class="flex justify-center items-center mb-4">
            <input
              type="radio"
              id="8a074972-ef7d-408a-b508-6325355d525e"
              name="type"
              class="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-500 dark:ring-offset-gray-700 focus:ring-1 dark:bg-gray-700 dark:border-gray-600 hover:cursor-pointer"
            />
            <label
              for="8a074972-ef7d-408a-b508-6325355d525e"
              class="ms-2 text-sm font-medium text-gray-800 dark:text-gray-300 hover:cursor-pointer"
            >
              Easy
            </label>
          </div>

          <div class="flex justify-center items-center mb-4">
            <input
              type="radio"
              id="d1ab8c33-05ca-44ec-bf60-7210b9a3bebb"
              name="type"
              class="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-500 dark:ring-offset-gray-700 focus:ring-1 dark:bg-gray-700 dark:border-gray-600 hover:cursor-pointer"
            />
            <label
              for="d1ab8c33-05ca-44ec-bf60-7210b9a3bebb"
              class="ms-2 text-sm font-medium text-gray-800 dark:text-gray-300 hover:cursor-pointer"
            >
              Medium
            </label>
          </div>

          <div class="flex justify-center items-center mb-4">
            <input
              type="radio"
              id="844f41ef-049d-4800-ba36-0f3efadc37cd"
              name="type"
              class="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-500 dark:ring-offset-gray-700 focus:ring-1 dark:bg-gray-700 dark:border-gray-600 hover:cursor-pointer"
            />
            <label
              for="844f41ef-049d-4800-ba36-0f3efadc37cd"
              class="ms-2 text-sm font-medium text-gray-800 dark:text-gray-300 hover:cursor-pointer"
            >
              Hard
            </label>
          </div>
        </div>

        <button
          type="submit"
          class="block mb-4 w-full rounded-full bg-blue-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-blue-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Add;
