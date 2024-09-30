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
    toDoEdit,
    loading,
    editItemId,
    startEditMode,
    saveEditing,
    handleSearchChange,
    handleChange,
    handleDelete,
    handleEditChange,
    handleAddToDo,
  } = useToDo();

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
            <ToDoTable
              toDoList={toDoList}
              handleDelete={handleDelete}
              startEditMode={startEditMode}
              saveEditing={saveEditing}
              handleChange={handleChange}
              handleEditChange={handleEditChange}
              editItemId={editItemId}
              toDoEdit={toDoEdit}
            />
          </>
        </Loader>
      </div>
    </>
  );
};

export default ToDoContainer;
