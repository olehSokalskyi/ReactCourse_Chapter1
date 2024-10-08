import { useAddressBook } from "../hooks/useAddressBook.ts";
import AddressBookSearchInput from "./AddressBookSearchInput.tsx";
import AddressBookTable from "./AddressBookTable.tsx";
import AddressForm from "./AddressForm.tsx";
import { Loader } from "./Loader.tsx";

const ToDoContainer = () => {
  const {
    addressBook,
    searchTerm,
    addressItem,
    addressItemEdit,
    editItemId,
    emptyAddressBook,
    startEditMode,
    saveEditing,
    handleSearchChange,
    handleChange,
    handleDelete,
    handleEditChange,
    handleAddAddressItem,
  } = useAddressBook();

  return (
    <>
      <div>
        <Loader emptyAddressBook={emptyAddressBook}>
          <>
            <AddressBookSearchInput
              searchTerm={searchTerm}
              handleSearchChange={handleSearchChange}
            />
            <AddressForm
              addressItem={addressItem}
              handleChange={handleChange}
              handleAddAddressItem={handleAddAddressItem}
            />
            <AddressBookTable
              addressBook={addressBook}
              handleDelete={handleDelete}
              startEditMode={startEditMode}
              saveEditing={saveEditing}
              handleChange={handleChange}
              handleEditChange={handleEditChange}
              editItemId={editItemId}
              addressItemEdit={addressItemEdit}
            />
          </>
        </Loader>
      </div>
    </>
  );
};

export default ToDoContainer;
