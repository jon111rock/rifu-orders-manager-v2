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

import Order from "./types/Order";
import { getOrders } from "./api/orderApi";

const App: React.FC = () => {
  // const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ordersList, setOrdersList] = useState<Order[]>();

  const [orderId, setOrderId] = useState<string>("orderId");

  const refreshOrderList = () => {
    getOrders().then((res) => {
      if (!res) return;

      setOrdersList(res);
    });
  };

  // const handleOrderClick = (clickedOrderId: string) => {};

  useEffect(() => {
    refreshOrderList();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path=""
          element={
            <div className="flex">
              <Outlet />
              <NavBar isMenuOpen={isMenuOpen} />
              <NavToggle
                onChange={(state) => {
                  setIsMenuOpen(state);
                }}
              />
              {/* <OrderTable /> */}
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
              path={`:${orderId}`}
              element={
                <OrderTable
                  ordersList={ordersList}
                  refreshOrderList={refreshOrderList}
                />
              }
            />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/orders" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
