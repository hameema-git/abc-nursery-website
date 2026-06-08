// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'
// import "@fortawesome/fontawesome-free/css/all.min.css";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { HelmetProvider } from "react-helmet-async";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>

          {/* Homepage */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* Blog Listing */}
          <Route
            path="/blog"
            element={<Blog />}
          />

          {/* Single Blog */}
          <Route
            path="/blog/:slug"
            element={<BlogPost />}
          />

        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);