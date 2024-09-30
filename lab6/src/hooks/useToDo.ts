import { useState } from "react";
import { ToDoItem } from "../types/toDoItem";
import { useGetAllToDo } from "./useGetAllToDo";

export const useToDo = () => {
  const { todos, loading, setTodos } = useGetAllToDo();
  const {toDoEdit, setToDoEdit} = useState<ToDoItem | null>(null);
  const [editItemId, setEditItemId] = useState<number>(0);
  const [toDo, setToDo] = useState<ToDoItem>({
    id: 0,
    title: "",
    completed: false,
    userId: 1,
  });

  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredToDoList = todos.filter((toDo: ToDoItem) =>
    toDo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setToDo({
      ...toDo,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleDelete = (id: number) => {
    const newToDoList = todos.filter((toDo: ToDoItem) => toDo.id !== id);
    setTodos(newToDoList);
  };

  const handleAddToDo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (toDo.title === "") return;
    const uuid = Date.now();
    const newToDo = { ...toDo, id: uuid, userId: 1 };
    setTodos([...todos, newToDo]);
    setToDo({ id: 0, title: "", completed: false, userId: 1 });
  };

  const startEditMode = (toDo: ToDoItem) => {
    setToDo(toDo);
    setEditItemId(toDo.id);
  };

  const endEditMode = () => {
    setToDoEdit({
      id: 0,
      title: "",
      completed: false,
      userId: 1,
    });
    setEditItemId(0);
  };

  const saveEditing = () => {
    const updatedTodos = todos.map((item) =>
      item.id === toDo.id ? toDo : item
    );
    setTodos(updatedTodos);
    endEditMode();
  };

  return {
    toDoList: filteredToDoList,
    toDo,
    toDoEdit,
    searchTerm,
    loading,
    editItemId,
    startEditMode,
    saveEditing,
    handleSearchChange,
    handleChange,
    handleDelete,
    handleAddToDo,
  };
};
