import React, { useState } from "react";
import { ToDoItem } from "../types/toDoItem.ts";

interface Props {
  toDoList: ToDoItem[];
  handleDelete: (id: number) => void;
  startEditMode: (toDo: ToDoItem) => void;
  saveEditing: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  editItemId: number;
  toDo: ToDoItem;
}

const ToDoTable: React.FC<Props> = ({
  toDoList,
  handleDelete,
  startEditMode,
  saveEditing,
  handleChange,
  editItemId,
  toDo,
}) => {
  const [error, setError] = useState<string>("");

  const handleSave = () => {
    if (toDo.title.trim() === "") {
      setError("Title cannot be empty");
      return;
    }
    setError("");
    saveEditing();
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Completed</th>
          <th>User Id</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {toDoList.map((item: ToDoItem) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>
              {editItemId === item.id ? (
                <>
                  <input
                    type="text"
                    name="title"
                    value={toDo.title}
                    onChange={handleChange}
                  />
                  {error && <span style={{ color: "red" }}>{error}</span>}
                </>
              ) : (
                item.title
              )}
            </td>
            <td>
              {editItemId === item.id ? (
                <input
                  type="checkbox"
                  name="completed"
                  checked={toDo.completed}
                  onChange={handleChange}
                />
              ) : item.completed ? (
                "Yes"
              ) : (
                "No"
              )}
            </td>
            <td>{item.userId}</td>
            <td>
              {editItemId === item.id ? (
                <button onClick={handleSave}>Save</button>
              ) : (
                <button onClick={() => startEditMode(item)}>Edit</button>
              )}
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ToDoTable;
