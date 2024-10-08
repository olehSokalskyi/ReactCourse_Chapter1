import React, { useState } from "react";
import { ToDoItem } from "../types/toDoItem.ts";

interface Props {
  toDoList: ToDoItem[];
  handleDelete: (id: number) => void;
  startEditMode: (toDo: ToDoItem) => void;
  saveEditing: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEditChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  editItemId: number;
  toDoEdit: ToDoItem;
}

const ToDoTable: React.FC<Props> = ({
  toDoList,
  handleDelete,
  startEditMode,
  saveEditing,
  handleEditChange,
  editItemId,
  toDoEdit,
}) => {
  const [error, setError] = useState<string>("");

  const handleSave = () => {
    if (toDoEdit.title.trim() === "") {
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
                    value={toDoEdit.title}
                    onChange={handleEditChange}
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
                  checked={toDoEdit.completed}
                  onChange={handleEditChange}
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
