import { useState } from "react";
import Table from "./components/table.jsx";
import Add from "./components/add.jsx";

function App() {
  return (
    <>
      <div className="text-center">
        <div className="text-5xl">Task RPG!</div>
        <div className="">Earn EXP as you do your task!</div>
      </div>
      <div className="ml-2 mt-2 flex">
        <Table />
        <Add />
      </div>
    </>
  );
}

export default App;
