import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
    priority: "Baixa",
    dueDate: "",
    assignees: "",
    status: "Pendente",
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({
      ...task,
      id: Date.now().toString(),
      assignees: task.assignees.split(",").map((name) => name.trim()),
    });
    setTask({
      id: "",
      title: "",
      description: "",
      priority: "Baixa",
      dueDate: "",
      assignees: "",
      status: "Pendente",
    });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        name="title"
        value={task.title}
        onChange={handleChange}
        placeholder="Título"
        required
      />
      <textarea
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Descrição"
        required
      />
      <select name="priority" value={task.priority} onChange={handleChange}>
        <option value="Baixa">Baixa</option>
        <option value="Média">Média</option>
        <option value="Alta">Alta</option>
      </select>
      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
        required
      />
      <input
        name="assignees"
        value={task.assignees}
        onChange={handleChange}
        placeholder="Responsáveis (separados por vírgula)"
        required
      />
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
};

export default TaskForm;
