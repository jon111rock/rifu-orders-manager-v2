import React, { useState } from "react";
import NavBar from "./components/NavBar";
import NavToggle from "./components/MenuToggle";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex">
      <NavBar isMenuOpen={isMenuOpen} />
      <div>home</div>
      <NavToggle
        onChange={(state) => {
          setIsMenuOpen(state);
        }}
      />
    </div>
  );
};

export default App;
