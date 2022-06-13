import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import NavToggle from "./components/MenuToggle";

import Orders from "./pages/Orders";
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

  useEffect(() => {
    refreshOrderList();
  }, []);

  return (
    <div className="flex">
      <Orders ordersList={ordersList} />
      <NavBar isMenuOpen={isMenuOpen} />
      <NavToggle
        onChange={(state) => {
          setIsMenuOpen(state);
        }}
      />
    </div>
  );
};

export default App;
