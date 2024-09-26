import { useState } from "react";
import { ToDoItem } from "../types/toDoItem";
import { useGetAllToDo } from "./useGetAllToDo";

export const useToDoList = () => {
  const { todos, setTodos } = useGetAllToDo();
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

  return {
    toDoList: filteredToDoList,
    toDo,
    searchTerm,
    handleSearchChange,
    handleChange,
    handleDelete,
    handleAddToDo,
  };
};
