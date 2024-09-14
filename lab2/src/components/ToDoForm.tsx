import React from 'react';
import { ToDoItem } from "../types/toDoItem.ts";

interface Props {
    toDo: ToDoItem;
    handleAddToDo: (event: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ToDoForm: React.FC<Props> = ({toDo, handleAddToDo, handleChange}) => {
    return (
        <form onSubmit={handleAddToDo}>
            <input name="title" value={toDo.title} onChange={handleChange} type="text" placeholder="Title"/>
            <input name="completed" value={toDo.completed ? 'true' : 'false'} onChange={handleChange} type="checkbox"/>
            <button type="submit">Add</button>
        </form>
    )
}

export default ToDoForm;