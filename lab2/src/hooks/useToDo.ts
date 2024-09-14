import { useState } from 'react';
import { ToDoItem } from '../types/toDoItem';

export const useToDoList = (initialToDoList: ToDoItem[]) => {
    const [toDoList, setToDoList] = useState<ToDoItem[]>(initialToDoList);
    const [toDo, setToDo] = useState<ToDoItem>({
        id: 0,
        title: "",
        completed: false,
        userId: 1
    });
    const [idCounter, setIdCounter] = useState<number>(initialToDoList.length + 1);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }

    const filteredToDoList = toDoList.filter((toDo: ToDoItem) =>
        toDo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setToDo({
            ...toDo,
            [name]: value
        });
    }

    const handleDelete = (id: number) => {
        const newToDoList = toDoList.filter((toDo: ToDoItem) => toDo.id !== id);
        setToDoList(newToDoList);
    }

    const handleAddToDo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIdCounter(idCounter + 1)
        const newToDo = { ...toDo, id: idCounter, userId: 1 };
        setToDoList([...toDoList, newToDo])
    }

    return {
        toDoList: filteredToDoList,
        toDo,searchTerm,
        handleSearchChange,
        handleChange,
        handleDelete,
        handleAddToDo
    }
}