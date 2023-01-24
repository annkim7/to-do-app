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
// data
import Data from "./data/Data";

// return
export default function App() {
  const [page, setPage] = useState("main");
  const [data, setData] = useState(Data);
  const [idx, setIdx] = useState("");

  const pageHandler = (page) => {
    setPage(page);
  };

  const idHandler = (idx) => {
    setIdx(idx);
  };

  return (
    <ThemeProvider theme={{ ...theme, ...mixins }}>
      <Router>
        <GlobalStyle />
        <Nav pageHandler={pageHandler} />
        <main>
          <Routes>
            <Route path="/" element={<Main data={data} />} />
            <Route
              path="/list"
              element={<List data={data} idHandler={idHandler} />}
            />
            <Route
              path="/add"
              element={<Form page={page} data={data} setData={setData} />}
            />
            <Route
              path="/edit"
              element={
                <Form page={page} data={data} setData={setData} idx={idx} />
              }
            />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
}
