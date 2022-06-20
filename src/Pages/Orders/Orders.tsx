import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { highlight } from "../../helpers/textHelper";
import { MAX_ORDER_PER_PAGE } from "../../constants";

import OrderList from "../../components/OrderList";
import OrderCardList from "../../components/OrderCardList";
import SearchBar from "../../components/SearchBar";
import Pagination from "../../components/Pagination";
import ListPage from "../../components/ListPage";

import Order from "../../types/Order";

type Props = {
  ordersList: Order[] | undefined;
};

const Orders: React.FC<Props> = ({ ordersList }) => {
  const navigate = useNavigate();
  const [changeListPage, setChangeListPage] = useState<number>(1);
  const [displayList, setDisplayList] = useState<Order[]>();
  const [pagedList, setPagedList] = useState<Order[]>();

  const [currentPageName, setCurrentPageName] = useState<string>("所有訂單");
  const [currentListPageNum, setCurrentListPageNum] = useState<number>(1);
  const [searchInput, setSearchInput] = useState<string>("");
  const [maxPage, setMaxPage] = useState<number>(1);

  const handleOrderClick = (orderId: string) => {
    navigate(`/orders/${orderId}`);
  };

  const handleChangePagination = useCallback((pageName: string) => {
    setCurrentPageName(pageName);
  }, []);

  const handleListPageChange = useCallback((pageNumber: number) => {
    setCurrentListPageNum(pageNumber);
  }, []);

  const handleSearchInput = useCallback((searchInput: string) => {
    setSearchInput(searchInput);
  }, []);

  const filterListByPageName = useCallback(
    (list: Order[]) => {
      return list.reduce((list: Order[], order) => {
        if (currentPageName === "所有訂單") {
          list.push(order);
        } else if (order.state === currentPageName) {
          list.push(order);
        }
        return list;
      }, []);
    },
    [currentPageName]
  );

  const filterListByPageNum = useCallback(
    (list: Order[]) => {
      return list.slice(
        (currentListPageNum - 1) * MAX_ORDER_PER_PAGE,
        currentListPageNum * MAX_ORDER_PER_PAGE
      );
    },
    [currentListPageNum]
  );

  const filterListBySearch = useCallback(
    (list: Order[]) => {
      return list.reduce((list: Order[], order) => {
        const tempOrder = JSON.parse(JSON.stringify(order)) as Order;
        if (searchInput === "") {
          list.push(tempOrder);
        } else if (order.user.name.includes(searchInput)) {
          tempOrder.user.name = highlight(tempOrder.user.name, searchInput);
          list.push(tempOrder);
        } else if (order.user.address.includes(searchInput)) {
          tempOrder.user.address = highlight(
            tempOrder.user.address,
            searchInput
          );
          list.push(tempOrder);
        } else if (order.user.phone_number.includes(searchInput)) {
          tempOrder.user.phone_number = highlight(
            tempOrder.user.phone_number,
            searchInput
          );
          list.push(tempOrder);
        }
        return list;
      }, []);
    },
    [searchInput]
  );

  // init displayList
  useEffect(() => {
    if (!ordersList) return;
    setDisplayList(ordersList);
  }, [ordersList]);

  // filter orderList
  useEffect(() => {
    if (!ordersList) return;
    // pageName
    const pagedList = filterListByPageName(ordersList);

    // searchInput
    const searchList = filterListBySearch(pagedList);

    setMaxPage(searchList.length / MAX_ORDER_PER_PAGE);
    // pageNumber
    const pagedNumList = filterListByPageNum(searchList);

    setDisplayList(pagedNumList);
  }, [
    ordersList,
    filterListByPageName,
    filterListByPageNum,
    filterListBySearch,
  ]);

  return (
    <div className="dashboard">
      <div className="title">訂單</div>
      <div className="dashboard-content">
        <Pagination
          ordersList={ordersList}
          onChangePage={handleChangePagination}
        />
        <div className="flex md:flex-row flex-col md:gap-0 gap-3  justify-between mb-4">
          <SearchBar
            onSearchInput={handleSearchInput}
            pagedList={pagedList}
            changeListPage={changeListPage}
          />
          <Link to="/orders/new">
            <button className="p-2  rounded-md bg-blue text-white">
              新增訂單
            </button>
          </Link>
        </div>
        <OrderList ordersList={displayList} onOrderClick={handleOrderClick} />
        <ListPage onChangePage={handleListPageChange} maxPage={maxPage} currentPageName={currentPageName} />
        <OrderCardList ordersList={displayList} />
      </div>
    </div>
  );
};

export default Orders;
