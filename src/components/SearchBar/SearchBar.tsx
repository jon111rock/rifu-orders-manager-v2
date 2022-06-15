import React from "react";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div className="flex gap-1 items-center text-lg relative md:w-fit w-full border border-solid border-lightGray p-1 rounded-xl z-0">
      <i className="bx bx-search text-lightGray"></i>
      <input type="text" className="focus:outline-none md:w-72 w-full" />
    </div>
  );
};

export default SearchBar;
