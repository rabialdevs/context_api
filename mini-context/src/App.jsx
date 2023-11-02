import React from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
const App = () => {
  return (
    <div className=" w-full h-[100vh]  flex items-center justify-center">
      <Login />
      <Profile/>
    </div>
  );
};

export default App;

