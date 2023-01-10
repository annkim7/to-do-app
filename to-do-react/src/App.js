import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import WholeList from "./pages/WholeList";
import Unfinished from "./pages/Unfinished";
import Add from "./pages/Add";

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<Unfinished />} />
        <Route path="/list" element={<WholeList />} />
        <Route path="/write" element={<Add />} />
      </Routes>
    </Router>
  );
}
