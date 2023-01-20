import React from "react";

// style
import GlobalStyle from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { theme, mixins } from "./styles/theme";
// routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import List from "./pages/List";
import Main from "./pages/Main";
import Add from "./pages/Add";

// return
export default function App() {
  return (
    <ThemeProvider theme={{ ...theme, ...mixins }}>
      <Router>
        <GlobalStyle />
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/list" element={<List />} />
            <Route path="/add" element={<Add />} />
            <Route path="/edit" element={<Add />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
}
