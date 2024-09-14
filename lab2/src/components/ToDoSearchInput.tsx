
const ToDoSearchInput = ({searchTerm, handleSearchChange}) => {
    return(
        <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
        />
    )
}
export default ToDoSearchInput;