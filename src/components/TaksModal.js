import React, { useState, useEffect } from "react";

const TaskModal = ({
  isOpen,
  onClose,
  addTask,
  updateTask,
  deleteTask,
  selectedTask,
}) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Baixa",
    dueDate: "",
    assignees: [],
    status: "Pendente",
  });

  useEffect(() => {
    if (selectedTask) {
      setTask(selectedTask);
    } else {
      setTask({
        title: "",
        description: "",
        priority: "Baixa",
        dueDate: "",
        assignees: [],
        status: "Pendente",
      });
    }
  }, [selectedTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (selectedTask) {
      updateTask(task);
    } else {
      addTask(task);
    }
  };

  return isOpen ? (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{selectedTask ? "Editar Tarefa" : "Adicionar Tarefa"}</h2>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          placeholder="Título"
        />
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="Descrição"
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
        />
        <input
          type="text"
          name="assignees"
          value={task.assignees.join(", ")}
          onChange={(e) =>
            setTask((prevTask) => ({
              ...prevTask,
              assignees: e.target.value.split(",").map((a) => a.trim()),
            }))
          }
          placeholder="Responsáveis (separados por vírgula)"
        />
        <select name="status" value={task.status} onChange={handleChange}>
          <option value="Pendente">Pendente</option>
          <option value="Andamento">Andamento</option>
          <option value="Concluída">Concluída</option>
        </select>
        <div className="modal-actions">
          <button onClick={handleSubmit}>
            {selectedTask ? "Atualizar" : "Adicionar"}
          </button>
          {selectedTask && (
            <button onClick={() => deleteTask(task.id)}>Excluir</button>
          )}
        </div>
      </div>
    </div>
  ) : null;
};

export default TaskModal;
