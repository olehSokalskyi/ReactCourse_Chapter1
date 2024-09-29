import React from 'react'
import { ToDoItem } from '../types/toDoItem.ts'

interface Props {
  toDoList: ToDoItem[]
  handleDelete: (id: number) => void
}

const ToDoTable: React.FC<Props> = ({ toDoList, handleDelete }) => {
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
        {toDoList.map((toDo: ToDoItem) => (
          <tr key={toDo.id}>
            <td>{toDo.id}</td>
            <td>{toDo.title}</td>
            <td>{toDo.completed ? 'Yes' : 'No'}</td>
            <td>{toDo.userId}</td>
            <td>
              <button onClick={() => handleDelete(toDo.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ToDoTable
