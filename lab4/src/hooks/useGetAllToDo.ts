import { useState, useEffect } from "react";
import { ToDoItem } from "../types/toDoItem";

export const useGetAllToDo = () => {
  const [todos, setTodos] = useState<ToDoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        fetch("https://jsonplaceholder.typicode.com/todos")
          .then((response) => response.json())
          .then((json) => {
            setTodos(json);
            setLoading(false);
          });
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
