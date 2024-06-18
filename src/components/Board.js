import React, { useState } from "react";
import Column from "./Column";
import TaskModal from "./TaksModal";
import useKanban from "../hooks/useKaban";

const Board = () => {
  const { tasks, addTask, updateTask, deleteTask, moveTask } = useKanban();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleAddTask = () => {
    setSelectedTask(null);
    setIsModalOpen(true);
  };

  const handleEditTask = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="board-container">
      <div className="board-header">
        <button className="add-task-button" onClick={handleAddTask}>
          Adicionar Tarefa
        </button>
      </div>
      <div className="board">
        <TaskModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          addTask={(task) => {
            addTask(task);
            handleCloseModal();
          }}
          updateTask={(task) => {
            updateTask(task);
            handleCloseModal();
          }}
          deleteTask={(taskId) => {
            deleteTask(taskId);
            handleCloseModal();
          }}
          selectedTask={selectedTask}
        />
        <div className="columns">
          <Column
            title="Pendente"
            tasks={tasks.filter((task) => task.status === "Pendente")}
            onMoveTask={moveTask}
            onDeleteTask={deleteTask}
            onEditTask={handleEditTask}
          />
          <Column
            title="Andamento"
            tasks={tasks.filter((task) => task.status === "Andamento")}
            onMoveTask={moveTask}
            onDeleteTask={deleteTask}
            onEditTask={handleEditTask}
          />
          <Column
            title="Concluída"
            tasks={tasks.filter((task) => task.status === "Concluída")}
            onMoveTask={moveTask}
            onDeleteTask={deleteTask}
            onEditTask={handleEditTask}
          />
        </div>
      </div>
    </div>
  );
};

export default Board;
