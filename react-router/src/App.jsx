import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Result from "./pages/Result";
import Page404 from "./pages/Page404";
import YouWin from "./pages/YouWin";
import YouLose from "./pages/YouLose";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/result" element={<Result />} />
        <Route path="/youwin" element={<YouWin />} />
        <Route path="/youlose" element={<YouLose />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
