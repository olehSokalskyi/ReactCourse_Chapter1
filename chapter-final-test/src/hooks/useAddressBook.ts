import { useState } from "react";
import { AddressItem } from "../types/AddressItem";

export const useAddressBook = () => {
  const [addressBook, setAddressBook] = useState<AddressItem[]>([]);
  const [addressItemEdit, setAddressItemEdit] = useState<AddressItem>({
    id: 0,
    firstName: "",
    lastName: "",
    phone: "",
  });
  const [editItemId, setEditItemId] = useState<number>(0);
  const [addressItem, setAddressItem] = useState<AddressItem>({
    id: 0,
    firstName: "",
    lastName: "",
    phone: "",
  });
  const [emptyAddressBook, setEmptyAddressBook] = useState<boolean>(true);

  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredAddressBook = addressBook.filter(
    (addressItem: AddressItem) =>
      addressItem.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      addressItem.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      addressItem.phone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddressItem({
      ...addressItem,
      [name]: value,
    });
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddressItemEdit({
      ...addressItemEdit,
      [name]: value,
    });
  };

  const handleDelete = (id: number) => {
    const newToDoList = addressBook.filter(
      (addressItem: AddressItem) => addressItem.id !== id
    );
    setAddressBook(newToDoList);
    setEmptyAddressBook(newToDoList.length === 0);
  };

  const handleAddAddressItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      addressItem.firstName === "" ||
      addressItem.lastName === "" ||
      addressItem.phone === ""
    )
      return;
    const uuid = Date.now();
    const newToDo = { ...addressItem, id: uuid };
    const newAddressBook = [...addressBook, newToDo];
    setAddressBook(newAddressBook);
    setEmptyAddressBook(newAddressBook.length === 0);
    setAddressItem({
      id: 0,
      firstName: "",
      lastName: "",
      phone: "",
    });
  };

  const startEditMode = (toDo: AddressItem) => {
    setAddressItemEdit(toDo);
    setEditItemId(toDo.id);
  };

  const endEditMode = () => {
    setAddressItemEdit({
      id: 0,
      firstName: "",
      lastName: "",
      phone: "",
    });
    setEditItemId(0);
  };

  const saveEditing = () => {
    const updatedTodos = addressBook.map((item) =>
      item.id === addressItemEdit.id ? addressItemEdit : item
    );
    setAddressBook(updatedTodos);
    endEditMode();
  };

  return {
    addressBook: filteredAddressBook,
    addressItem,
    addressItemEdit,
    searchTerm,
    editItemId,
    emptyAddressBook,
    startEditMode,
    saveEditing,
    handleSearchChange,
    handleChange,
    handleEditChange,
    handleDelete,
    handleAddAddressItem,
  };
};
