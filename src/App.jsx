// src/App.js
import { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  LandingPage,
  DonationPage,
  CurrentProject,
  UpcomingProject,
  AboutPage,
  WarriorsPage, // Import the new page
} from "./pages/index";
import Layout from "./components/layout/Layout";
import BlogDetail from "./pages/BlogDetail/BlogDetail";
import Gallery from "./pages/GalleryPage/GalleryPage";
import DonationDashboard from "./components/DonationDashboard/DonationDashboard";
import Receipt from "./components/Receipt/Receipt"
import Contact from "./pages/Contact/contact";
import { JoinUs } from "./components";

function App() {
  const blogSliderRef = useRef(null);
  const partnersRef = useRef(null);

  return (
    <Router>
      <div className="App">
        <Layout blogSliderRef={blogSliderRef} partnersRef={partnersRef}>
          <Routes>
            <Route
              path="/"
              element={
                <LandingPage
                  blogSliderRef={blogSliderRef}
                  partnersRef={partnersRef}
                />
              }
            />
            <Route path="/donation" element={<DonationPage />} />
            <Route path="/current-projects" element={<CurrentProject />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/upcoming-projects" element={<UpcomingProject />} />
            <Route path="/donation-receipt" element={<Receipt />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutus" element={<AboutPage />} />
            <Route path="/donation-dashboard" element={<DonationDashboard />} />
            <Route path="/joinus" element={<JoinUs />} />
            <Route path="/our-warriors" element={<WarriorsPage />} />{" "}
            {/* New route */}
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
