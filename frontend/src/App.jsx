import React from "react";
import Nav from "./components/Nav";

import Home from "./pages/Home";
import Routing from "./utils/Routing";

const App = () => {
  return (
    <div className="app min-h-screen w-full">
      <Nav />
      <Routing/>
    </div>
  );
};

export default App;
