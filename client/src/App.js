import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />}></Route>
          <Route path="/create" element={<CreateUser />}></Route>
          <Route path="/update/:id" element={<UpdateUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
