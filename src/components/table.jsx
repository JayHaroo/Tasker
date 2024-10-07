import React from "react";

const Table = () => {
  return (
    <>
      <div class="overflow-x-auto bg-white dark:bg-neutral-700 text-white h-[400px] w-[1000px]">
        <table class="min-w-full text-left text-xs whitespace-nowrap">
          <thead class="uppercase tracking-wider border-b-2 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-800">
            <tr>
              <th scope="col" class="px-6 py-4">
                Task Name
              </th>
              <th scope="col" class="px-6 py-4">
                Action
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
};

export default Table;
