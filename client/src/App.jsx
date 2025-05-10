import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const isOwnerPath = useLocation().pathname.include('owner');
  return (
    <div className="">
      {isOwnerPath &&  <Navbar />}
    </div>
  );
};

export default App;
