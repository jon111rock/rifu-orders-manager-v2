import React, { useState } from "react";
import NavBar from "./components/NavBar";
import NavToggle from "./components/MenuToggle";

import Orders from "./Pages/Orders";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex">
      <Orders />
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
