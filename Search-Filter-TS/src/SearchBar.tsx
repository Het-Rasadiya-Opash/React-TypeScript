import React from "react";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  ageRange: string;
  onAgeRangeChange: (range: string) => void;
}

const ranges = [
  { label: "All", value: "ALL" },
  { label: "18–25", value: "18-25" },
  { label: "26–30", value: "26-30" },
  { label: "31–50", value: "31-50" },
];

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
  ageRange,
  onAgeRangeChange,
}) => {
  return (
    <div className="mb-4 space-y-3">
      <input
        type="text"
        placeholder="Search by ID, name, email, or age..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex gap-2 flex-wrap">
        {ranges.map((range) => (
          <button
            key={range.value}
            onClick={() => onAgeRangeChange(range.value)}
            className={`px-3 py-1 rounded-md border text-sm
              ${
                ageRange === range.value
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700"
              }`}
          >
            {range.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
