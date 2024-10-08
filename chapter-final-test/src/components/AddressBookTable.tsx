import React, { useState } from "react";
import { AddressItem } from "../types/AddressItem.ts";

interface Props {
  addressBook: AddressItem[];
  handleDelete: (id: number) => void;
  startEditMode: (toDo: AddressItem) => void;
  saveEditing: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEditChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  editItemId: number;
  addressItemEdit: AddressItem;
}

const AddressBookTable: React.FC<Props> = ({
  addressBook,
  handleDelete,
  startEditMode,
  saveEditing,
  handleEditChange,
  editItemId,
  addressItemEdit,
}) => {
 const [firstNameError, setFirstNameError] = useState<string>("");
 const [lastNameError, setLastNameError] = useState<string>("");
 const [phoneError, setPhoneError] = useState<string>("");

const handleSave = () => {
  let hasError = false;

  if (addressItemEdit.firstName.trim() === "") {
    setFirstNameError("First name cannot be empty");
    hasError = true;
  } else {
    setFirstNameError("");
  }

  if (addressItemEdit.lastName.trim() === "") {
    setLastNameError("Last name cannot be empty");
    hasError = true;
  } else {
    setLastNameError("");
  }

  if (addressItemEdit.phone.trim() === "") {
    setPhoneError("Phone cannot be empty");
    hasError = true;
  } else {
    setPhoneError("");
  }

  if (hasError) {
    return;
  }

  saveEditing();
};

 return (
   <table>
     <thead>
       <tr>
         <th>Id</th>
         <th>First name</th>
         <th>Last name</th>
         <th>Phone</th>
         <th>Action</th>
       </tr>
     </thead>
     <tbody>
       {addressBook.map((item: AddressItem) => (
         <tr key={item.id}>
           <td>{item.id}</td>
           <td>
             {editItemId === item.id ? (
               <>
                 <input
                   type="text"
                   name="firstName"
                   value={addressItemEdit.firstName}
                   onChange={handleEditChange}
                 />
                 {firstNameError && (
                   <span style={{ color: "red" }}>{firstNameError}</span>
                 )}
               </>
             ) : (
               item.firstName
             )}
           </td>
           <td>
             {editItemId === item.id ? (
               <>
                 <input
                   type="text"
                   name="lastName"
                   value={addressItemEdit.lastName}
                   onChange={handleEditChange}
                 />
                 {lastNameError && (
                   <span style={{ color: "red" }}>{lastNameError}</span>
                 )}
               </>
             ) : (
               item.lastName
             )}
           </td>
           <td>
             {editItemId === item.id ? (
               <>
                 <input
                   type="text"
                   name="phone"
                   value={addressItemEdit.phone}
                   onChange={handleEditChange}
                 />
                 {phoneError && (
                   <span style={{ color: "red" }}>{phoneError}</span>
                 )}
               </>
             ) : (
               item.phone
             )}
           </td>
           <td>
             {editItemId === item.id ? (
               <button onClick={handleSave}>Save</button>
             ) : (
               <button onClick={() => startEditMode(item)}>Edit</button>
             )}
             <button onClick={() => handleDelete(item.id)}>Delete</button>
           </td>
         </tr>
       ))}
     </tbody>
   </table>
 );
};

export default AddressBookTable;
