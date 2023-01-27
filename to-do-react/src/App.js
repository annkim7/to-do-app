import React, { Suspense, useState } from "react";
// style
import GlobalStyle from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { theme, mixins } from "./styles/theme";
// routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// data
import Data from "./data/Data";

const Nav = React.lazy(() => import("./components/Nav"));
const List = React.lazy(() => import("./pages/List"));
const Main = React.lazy(() => import("./pages/Main"));
const Edit = React.lazy(() => import("./pages/Edit"));
const Add = React.lazy(() => import("./pages/Add"));

export default function App() {
  const [data, setData] = useState(Data);
  const [idx, setIdx] = useState("");

  const idHandler = (idx) => {
    setIdx(idx);
  };

  console.log(idx);

  return (
    <ThemeProvider theme={{ ...theme, ...mixins }}>
      <Router>
        <GlobalStyle />
        <Suspense fallback={<div>Loading...</div>}>
          <Nav />
          <main>
            <Routes>
              <Route
                path="/"
                element={<Main data={data} idHandler={idHandler} />}
              />
              <Route
                path="/list"
                element={<List data={data} idHandler={idHandler} />}
              />
              <Route
                path="/add"
                element={<Add data={data} setData={setData} />}
              />
              <Route
                path="/edit"
                element={<Edit data={data} setData={setData} idx={idx} />}
              />
            </Routes>
          </main>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}
