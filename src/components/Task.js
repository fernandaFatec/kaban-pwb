import React from "react";
import { useDrag } from "react-dnd";
import dayjs from "dayjs";

const Task = ({ task, onDeleteTask, onEditTask }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { id: task.id, status: task.status },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const isDueSoon = dayjs(task.dueDate).isBefore(dayjs().add(2, "day"));
  const taskClass = `task ${task.priority} ${isDueSoon ? "due-soon" : ""} ${
    task.status === "Concluída" ? "completed" : ""
  } ${isDragging ? "dragging" : ""}`;

  return (
    <div className={taskClass} ref={drag} onClick={() => onEditTask(task)}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Prioridade: {task.priority}</p>
      <p>Vencimento: {task.dueDate}</p>
      <p>Responsáveis: {task.assignees.join(", ")}</p>
    </div>
  );
};

export default Task;
