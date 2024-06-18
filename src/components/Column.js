import React from "react";
import { useDrop } from "react-dnd";
import Task from "./Task";

const Column = ({ title, tasks, onMoveTask, onDeleteTask, onEditTask }) => {
  const [, drop] = useDrop({
    accept: "TASK",
    drop: (item) => {
      onMoveTask(item.id, title);
    },
  });

  return (
    <div className="column" ref={drop}>
      <h2>{title}</h2>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
        />
      ))}
    </div>
  );
};

export default Column;
