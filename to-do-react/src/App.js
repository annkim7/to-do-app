import React, { useState } from "react";

// style
import GlobalStyle from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { theme, mixins } from "./styles/theme";
// routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import List from "./pages/List";
import Main from "./pages/Main";
import Form from "./pages/Form";

// return
export default function App() {
  const [page, setPage] = useState("main");

  const pageHandler = (page) => {
    setPage(page);
  };

  return (
    <ThemeProvider theme={{ ...theme, ...mixins }}>
      <Router>
        <GlobalStyle />
        <Nav pageHandler={pageHandler} />
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/list" element={<List />} />
            <Route path="/add" element={<Form page={page} />} />
            <Route path="/edit" element={<Form page={page} />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
}
