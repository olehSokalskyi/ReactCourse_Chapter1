import React, { useState } from "react";
import { AddressItem } from "../types/AddressItem.ts";

interface Props {
  addressItem: AddressItem;
  handleAddAddressItem: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddressForm: React.FC<Props> = ({
  addressItem,
  handleAddAddressItem,
  handleChange,
}) => {
  const [firstNameError, setFirstNameError] = useState<string>("");
  const [lastNameError, setLastNameError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");

  const validateForm = () => {
    let isValid = true;

    if (addressItem.firstName.trim() === "") {
      setFirstNameError("First name cannot be empty");
      isValid = false;
    } else {
      setFirstNameError("");
    }

    if (addressItem.lastName.trim() === "") {
      setLastNameError("Last name cannot be empty");
      isValid = false;
    } else {
      setLastNameError("");
    }

    if (addressItem.phone.trim() === "") {
      setPhoneError("Phone cannot be empty");
      isValid = false;
    } else {
      setPhoneError("");
    }

    return isValid;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      handleAddAddressItem(event);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputDiv">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={addressItem.firstName}
          onChange={handleChange}
        />
        {firstNameError && (
          <span style={{ color: "red" }}>{firstNameError}</span>
        )}
      </div>
      <div className="inputDiv">
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={addressItem.lastName}
          onChange={handleChange}
        />
        {lastNameError && <span style={{ color: "red" }}>{lastNameError}</span>}
      </div>
      <div className="inputDiv">
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={addressItem.phone}
          onChange={handleChange}
        />
        {phoneError && <span style={{ color: "red" }}>{phoneError}</span>}
      </div>

      <button type="submit">Add</button>
    </form>
  );
};

export default AddressForm;
