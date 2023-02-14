import React, { Suspense } from "react";
// style
import GlobalStyle from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { theme, mixins } from "./styles/theme";
// routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Nav = React.lazy(() => import("./components/Nav"));
const List = React.lazy(() => import("./pages/List"));
const Main = React.lazy(() => import("./pages/Main"));
const Edit = React.lazy(() => import("./pages/Edit"));
const Add = React.lazy(() => import("./pages/Add"));
const Loading = React.lazy(() => import("./components/Loading"));

export default function App() {
  return (
    <ThemeProvider theme={{ ...theme, ...mixins }}>
      <Router>
        <GlobalStyle />
        <Suspense fallback={<Loading />}>
          <Nav />
          <main>
            <Routes>
              <Route path="/to-do-app" element={<Main />} />
              <Route path="/to-do-app/list" element={<List />} />
              <Route path="/to-do-app/add" element={<Add />} />
              <Route path="/to-do-app/edit/:id" element={<Edit />} />
            </Routes>
          </main>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}
