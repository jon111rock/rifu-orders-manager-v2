import React, { useState, useEffect } from "react";
import Order from "../../types/Order";

type Props = {
  onSearchInput: (searchInput: string) => void;
  pagedList?: Order[];
  changeListPage?: number;
};

const SearchBar: React.FC<Props> = ({
  onSearchInput,
  pagedList,
  changeListPage,
}) => {
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    onSearchInput(searchInput);
  }, [searchInput, onSearchInput]);

  useEffect(() => {
    setSearchInput("");
  }, [pagedList, changeListPage]);

  return (
    <div className="flex gap-1 items-center text-lg relative md:w-fit w-full border border-solid border-lightGray p-1 rounded-xl z-0">
      <i className="bx bx-search text-lightGray"></i>
      <input
        type="text"
        className="focus:outline-none md:w-72 w-full md:bg-white bg-gray md:text-lg text-2xl"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
