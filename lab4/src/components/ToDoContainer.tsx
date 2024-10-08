import { useToDo } from "../hooks/useToDo.ts";
import ToDoSearchInput from "./ToDoSearchInput.tsx";
import ToDoTable from "./ToDoTable.tsx";
import ToDoForm from "./ToDoForm.tsx";
import { Loader } from "./Loader.tsx";

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
  } = useToDo();

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
            <Loader
              visible={loading}
              height={100}
              width={100}
              color="#4fa94d"
              secondaryColor="#4fa94d"
            />
          ) : (
            <ToDoTable toDoList={toDoList} handleDelete={handleDelete} />
          )}
        </div>
      </div>
    </>
  );
};

export default ToDoContainer;
