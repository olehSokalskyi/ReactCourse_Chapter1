import { useToDo } from '../hooks/useToDo.ts'
import ToDoSearchInput from './ToDoSearchInput.tsx'
import ToDoTable from './ToDoTable.tsx'
import ToDoForm from './ToDoForm.tsx'
import { Loader } from './Loader.tsx'

const ToDoContainer = () => {
  const {
    toDoList,
    searchTerm,
    toDo,
    loading,
    handleSearchChange,
    handleChange,
    handleDelete,
    handleAddToDo,
  } = useToDo()

  return (
    <>
      <div>
          <Loader loading={loading}>
            <>
              <ToDoSearchInput
                searchTerm={searchTerm}
                handleSearchChange={handleSearchChange}
              />
              <ToDoForm
                toDo={toDo}
                handleChange={handleChange}
                handleAddToDo={handleAddToDo}
              />
              <ToDoTable toDoList={toDoList} handleDelete={handleDelete} />
            </>
          </Loader>
      </div>
    </>
  )
}

export default ToDoContainer
