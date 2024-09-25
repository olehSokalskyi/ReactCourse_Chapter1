import {ToDoItem} from "../types/toDoItem.ts";
import {useToDoList} from "../hooks/useToDo.ts";
import ToDoSearchInput from "./ToDoSearchInput.tsx";
import ToDoTable from "./ToDoTable.tsx";
import ToDoForm from "./ToDoForm.tsx";



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
};

export default ToDoContainer;