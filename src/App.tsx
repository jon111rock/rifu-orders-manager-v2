import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import NavToggle from "./components/MenuToggle";

import Orders from "./pages/Orders";
import OrderTable from "./pages/OrderTable";
import Order from "./types/Order";
import { getOrders } from "./api/orderApi";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ordersList, setOrdersList] = useState<Order[]>();

  const refreshOrderList = () => {
    getOrders().then((res) => {
      if (!res) return;
      setOrdersList(res);
    });
  };

  const handleOrderClick = (clickedOrderId: string) => {
    console.log(clickedOrderId);
  };

  useEffect(() => {
    refreshOrderList();
  }, []);

  return (
    <div className="flex">
      <Orders ordersList={ordersList} onOrderClick={handleOrderClick} />
      <NavBar isMenuOpen={isMenuOpen} />
      <NavToggle
        onChange={(state) => {
          setIsMenuOpen(state);
        }}
      />
      <OrderTable />
    </div>
  );
};

export default App;
