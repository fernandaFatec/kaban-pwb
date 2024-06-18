import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./styles/style.css";
import Board from "./components/Board";

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <h1>Kanban Board</h1>
        <Board />
      </div>
    </DndProvider>
  );
};

export default App;
