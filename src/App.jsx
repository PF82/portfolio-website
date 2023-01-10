import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Project from './pages/Project';
import { startTransition } from 'react';
import ResponsiveMasonry from './pages/Project'

export default function App() {
  return (
    // https://www.w3schools.com/react/react_router.asp
    <BrowserRouter>
      {/* <ResponsiveMasonry /> */}
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="contact" element={<Contact />} />
          <Route path="project/:projectId" element={<Project />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

