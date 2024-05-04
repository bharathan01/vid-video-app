import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppContext } from "./context/AppContext.jsx";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import {Home,SearchFeed,VideoFeed,Header } from "./components/Index.js"

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppContext>
    <BrowserRouter>
    <Header/>
      <Routes>
         <Route path="/" exact element={<Home/>}/>
         <Route path="/Video/:id" exact element={<VideoFeed/>}/>
         <Route path="/Search/:searchQuary" exact element={<SearchFeed/>}/>
      </Routes>
    </BrowserRouter>
  </AppContext>
);
