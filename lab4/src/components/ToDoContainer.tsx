import { useToDoList } from "../hooks/useToDo.ts";
import ToDoSearchInput from "./ToDoSearchInput.tsx";
import ToDoTable from "./ToDoTable.tsx";
import ToDoForm from "./ToDoForm.tsx";
import { Loader } from "./Loader.tsx";
import { useGetAllToDo } from "../hooks/useGetAllToDo.ts";

const ToDoContainer = () => {
  const {
    toDoList,
    searchTerm,
    toDo,
    handleSearchChange,
    handleChange,
    handleDelete,
    handleAddToDo,
  } = useToDoList();

  const { loading } = useGetAllToDo();

  return (
    <>
      <div>
        <div>
          <ToDoSearchInput
            searchTerm={searchTerm}
            handleSearchChange={handleSearchChange}
          />
        </div>
        <div>
          <ToDoForm
            toDo={toDo}
            handleChange={handleChange}
            handleAddToDo={handleAddToDo}
          />
        </div>
        <div>
          {loading ? (
            <Loader />
          ) : (
            <ToDoTable toDoList={toDoList} handleDelete={handleDelete} />
          )}
        </div>
      </div>
    </>
  );
};

export default ToDoContainer;
