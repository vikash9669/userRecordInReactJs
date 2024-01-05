import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./conponent/Create";
import Home from "./conponent/Home";
import Read from "./conponent/Read";
import Update from "./conponent/Update";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Home/>}></Route>
        <Route path="/Create" element ={<Create/>}></Route>
        <Route path="/Read/:id" element ={<Read/>}></Route>
        <Route path="/Update/:id" element ={<Update/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
