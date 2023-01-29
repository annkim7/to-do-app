import React, { Suspense } from "react";
// style
import GlobalStyle from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { theme, mixins } from "./styles/theme";
// routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//data
import useFetch from "./util/useFetch";

const Nav = React.lazy(() => import("./components/Nav"));
const List = React.lazy(() => import("./pages/List"));
const Main = React.lazy(() => import("./pages/Main"));
const Edit = React.lazy(() => import("./pages/Edit"));
const Add = React.lazy(() => import("./pages/Add"));

export default function App() {
  const [data, isPending, error] = useFetch("http://localhost:3001/data");

  return (
    <ThemeProvider theme={{ ...theme, ...mixins }}>
      <Router>
        <GlobalStyle />
        {error && <div>{error}</div>}
        <Suspense fallback={<div>Loading...</div>}>
          <Nav />
          <main>
            <Routes>
              <Route
                path="/"
                element={<Main data={data} isPending={isPending} />}
              />
              <Route path="/list" element={<List data={data} />} />
              <Route path="/add" element={<Add data={data} />} />
              <Route path="/edit/:id" element={<Edit data={data} />} />
            </Routes>
          </main>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}
