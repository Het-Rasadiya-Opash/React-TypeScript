import React from "react";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search by name or email..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md 
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default SearchBar;
