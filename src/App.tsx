import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import UserList from "./components/UserList/UserList";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/user-list" element={<UserList />} />
        {/* <Route path="/userList/:userID" element={<User />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
