import { useState, useEffect } from "react";
import { ToDoItem } from "../types/toDoItem";

export const useGetAllToDo = () => {
  const [todos, setTodos] = useState<ToDoItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const json = await response.json();
        setTodos(json);
        console.log("one");
      } catch (e) {
        setError(e as Error);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { todos, loading, setTodos };
};
