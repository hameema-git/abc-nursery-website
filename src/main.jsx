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
import AboutPage from "./pages/AboutPage";
import ProgramsPage from "./pages/ProgramsPage";
import WhyChoosePage from "./pages/WhyChoosePage";
import EyfsCurriculumPage from "./pages/EyfsCurriculumPage";
import AdmissionsGuidePage from "./pages/AdmissionsGuidePage";
import NurseryFeesPage from "./pages/NurseryFeesPage";
import InfantCarePage from "./pages/InfantCarePage";
import ToddlerDevelopmentPage from "./pages/ToddlerDevelopmentPage";
import PreschoolReadinessPage from "./pages/PreschoolReadinessPage";
import LearningThroughPlayPage from "./pages/LearningThroughPlayPage";
import ParentResourcesPage from "./pages/ParentResourcesPage";
import ChildDevelopmentMilestonesPage from "./pages/ChildDevelopmentMilestonesPage";
import NutritionProgramPage from "./pages/NutritionProgramPage";
import SafetySecurityPage from "./pages/SafetySecurityPage";
import SchoolPreparationPage from "./pages/SchoolPreparationPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>

          {/* Homepage */}
          {/* <Route
            path="/"
            element={<Home />}
          /> */}

          <Route
    path="/home"
    element={<HomePage />}
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
          <Route
  path="/about"
  element={<AboutPage />}
/>
<Route
  path="/programs"
  element={<ProgramsPage />}
/>

<Route
    path="/contact"
    element={<ContactPage />}
/>
<Route
    path="/gallery"
    element={<GalleryPage />}
/>

<Route
    path="/why-choose-us"
    element={<WhyChoosePage />}
/>
<Route
    path="/eyfs-curriculum"
    element={<EyfsCurriculumPage />}
/>

<Route
    path="/admissions-guide"
    element={<AdmissionsGuidePage />}
/>
<Route
    path="/nursery-fees"
    element={<NurseryFeesPage />}
/>
<Route
    path="/infant-care"
    element={<InfantCarePage />}
/>
<Route
    path="/toddler-development"
    element={<ToddlerDevelopmentPage />}
/>

<Route
    path="/preschool-readiness"
    element={<PreschoolReadinessPage />}
/>
<Route
    path="/learning-through-play"
    element={<LearningThroughPlayPage />}
/>

<Route
    path="/parent-resources"
    element={<ParentResourcesPage />}
/>
<Route
    path="/child-development-milestones"
    element={<ChildDevelopmentMilestonesPage />}
/>
<Route
    path="/nutrition-program"
    element={<NutritionProgramPage />}
/>

<Route
    path="/safety-security"
    element={<SafetySecurityPage />}
/>

<Route
    path="/school-preparation"
    element={<SchoolPreparationPage />}
/>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);