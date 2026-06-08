import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/blog"
          element={<Blog />}
        />

        <Route
          path="/blog/:slug"
          element={<BlogPost />}
        />
  <Route
    path="*"
    element={<NotFound />}
  />

      </Routes>

    </BrowserRouter>
  );
}

export default App;