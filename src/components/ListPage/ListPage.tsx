import React, { useState, useEffect, useCallback } from "react";

type Props = {
  onChangePage?: (pageNumber: number) => void;
  maxPage: number;
  currentPageName?: string;
};

const ListPage: React.FC<Props> = ({
  onChangePage,
  maxPage,
  currentPageName,
}) => {
  const [currentNum, setCurrentNum] = useState<number>(1);

  const createNumberAry = () => {
    let list = [];
    for (let i = 0; i < maxPage; i++) {
      list.push(
        <li
          key={i}
          className={`cursor-pointer p-1 ${
            currentNum === i + 1 ? "active" : ""
          }`}
          onClick={() => {
            setCurrentNum(i + 1);
          }}
        >
          {i + 1}
        </li>
      );
    }
    return list;
  };

  const callbackChangePage = useCallback(() => {
    if (!onChangePage) return;
    onChangePage(currentNum);
  }, [currentNum, onChangePage]);

  useEffect(() => {
    callbackChangePage();
  }, [callbackChangePage]);

  useEffect(() => {
    setCurrentNum(1);
  }, [currentPageName]);

  return (
    <div className="grid place-items-center p-3">
      <ul className="flex gap-5 items-center">
        <i
          className="bx bx-chevron-left bx-sm cursor-pointer"
          onClick={() => {
            setCurrentNum((curr) => {
              if (curr <= 1) return curr;
              return curr - 1;
            });
          }}
        ></i>
        {createNumberAry()}
        <i
          className="bx bx-chevron-right bx-sm cursor-pointer"
          onClick={() => {
            setCurrentNum((curr) => {
              if (curr >= maxPage) return curr;
              return curr + 1;
            });
          }}
        ></i>
      </ul>
    </div>
  );
};

export default ListPage;
