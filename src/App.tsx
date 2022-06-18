import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import NavBar from "./components/NavBar";
import NavToggle from "./components/MenuToggle";

import Orders from "./pages/Orders";
import OrderTable from "./pages/OrderTable";
import Items from "./pages/Items";
import ItemTable from "./pages/ItemTable";

import Order from "./types/Order";
import { getOrders } from "./api/orderApi";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ordersList, setOrdersList] = useState<Order[]>();
  const [isOrderTableOpen, setisOrderTableOpen] = useState<boolean>(false);

  const refreshOrderList = () => {
    getOrders().then((res) => {
      if (!res) return;

      setOrdersList(res);
    });
  };

  useEffect(() => {
    refreshOrderList();
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    if (isOrderTableOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOrderTableOpen]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path=""
          element={
            <div className="flex relative">
              <NavToggle
                isMenuOpen={isMenuOpen}
                onChange={(state) => {
                  setIsMenuOpen(state);
                }}
              />
              <Outlet />
              <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            </div>
          }
        >
          <Route
            path="orders"
            element={
              <>
                <Orders
                  ordersList={ordersList}
                  // onOrderClick={handleOrderClick}
                />
                <Outlet />
              </>
            }
          >
            <Route
              path={`:orderId`}
              element={
                <OrderTable
                  ordersList={ordersList}
                  refreshOrderList={refreshOrderList}
                  setIsOrderTableOpen={setisOrderTableOpen}
                />
              }
            />
          </Route>
          <Route
            path="items"
            element={
              <>
                <Items />
                <Outlet />
              </>
            }
          >
            <Route path=":itemId" element={<ItemTable />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/orders" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
