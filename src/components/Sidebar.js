import React from "react";

const Sidebar = ({ onAddTask }) => {
  return (
    <div className="sidebar">
      <button onClick={onAddTask}>Adicionar Tarefa</button>
    </div>
  );
};

export default Sidebar;
