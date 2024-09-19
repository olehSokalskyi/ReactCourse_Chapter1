import './App.css'
import ToDoTable from './components/ToDoTable.tsx'
import ToDoForm from './components/ToDoForm.tsx'
import ToDoSearchInput from './components/ToDoSearchInput.tsx'
import { ToDoItem } from './types/toDoItem.ts'
import { useToDoList } from './hooks/useToDo.ts'
import PageTitle from "./components/PageTitle.tsx";

const toDoListExample: ToDoItem[] = [
  {
    id: 1,
    title: 'Test 1',
    completed: false,
    userId: 1,
  },
  {
    id: 2,
    title: 'Test 2',
    completed: false,
    userId: 1,
  },
  {
    id: 3,
    title: 'Test 3',
    completed: true,
    userId: 1,
  },
]
function App() {
  const {
    toDoList,
    searchTerm,
    toDo,
    handleSearchChange,
    handleChange,
    handleDelete,
    handleAddToDo,
  } = useToDoList(toDoListExample)
  return (
    <>
      <div>
        <PageTitle />
        <div>
          <ToDoSearchInput
            searchTerm={searchTerm}
            handleSearchChange={handleSearchChange}
          />
        </div>
        <div>
          <ToDoTable toDoList={toDoList} handleDelete={handleDelete} />
        </div>
        <div>
          <ToDoForm
            toDo={toDo}
            handleAddToDo={handleAddToDo}
            handleChange={handleChange}
          />
        </div>
      </div>
    </>
  )
}

export default App
