import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Services from "./pages/Services"
// import Pricing from "./pages/Pricing"
import Reviews from "./pages/Reviews"
import Contact from "./pages/Contact"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="services" element={<Services />} />
          {/* <Route path="pricing" element={<Pricing />} /> */}
          <Route path="reviews" element={<Reviews />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
