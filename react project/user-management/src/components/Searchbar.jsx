import React from "react";

const SearchBar = ({ searchId, setSearchId }) => {
  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search by ID..."
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;