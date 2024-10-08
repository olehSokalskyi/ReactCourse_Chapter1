import React from "react";

interface Props {
  searchTerm: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddressBookSearchInput: React.FC<Props> = ({
  searchTerm,
  handleSearchChange,
}) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleSearchChange}
    />
  );
};
export default AddressBookSearchInput;
