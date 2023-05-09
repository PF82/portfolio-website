import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import SmallProjects from './subpages/SmallProjects';
import MainProject from './subpages/MainProject';
import MainProjects from './subpages/MainProjects';
import SmallProject from './subpages/SmallProject';
import CurriculumVitae from './subpages/CurriculumVitae';
import WebDevelopment from '../src/subpages/WebDevelopment';
import Technologies from '../src/subpages/Technologies';
import Industries from '../src/subpages/Industries';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />}>
            <Route path='webdevelopment' element={<WebDevelopment />} />
            <Route path='industries' element={<Industries />} />
            <Route path='technologies' element={<Technologies />} />
          </Route>
          <Route path="portfolio" element={<Portfolio />}>
            <Route path='smallprojects' element={<SmallProjects />} />
            <Route path='mainprojects' element={<MainProjects />} />
          </Route>
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact" element={<Contact />} />
          <Route path="mainproject/:projectId" element={<MainProject />} />
          <Route path="smallproject/:projectId" element={<SmallProject />} />
          <Route path="curriculumvitae" element={<CurriculumVitae />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

