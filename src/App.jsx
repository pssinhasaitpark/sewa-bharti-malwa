// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {
//   LandingPage,
//   DonationPage,
//   CurrentProject,
//   PastProject,
// } from "./pages/index";
// import Layout from "./components/layout/Layout";
// import BlogDetail from "./pages/BlogDetail/BlogDetail";
// // import HomeChatBox from './Views/Components/HomeChatBox/HomeChatBox';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Layout>
//           <Routes>
//             <Route path="/" element={<LandingPage />} />
//             <Route path="/donation" element={<DonationPage />} />
//             <Route path="/current-projects" element={<CurrentProject />} />
//             <Route path="/blog/:id" element={<BlogDetail />} />
//             <Route path="/past-projects" element={<PastProject />} />
//             {/* <Route path="/chat" element={<HomeChatBox />} />*/}
//           </Routes>
//         </Layout>
//       </div>
//     </Router>
//   );
// }

// export default App;

// src/App.jsx
import { useRef, lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Loader from "./components/Loader/Loader";

const LandingPage = lazy(() => import("./pages/landingPage/LandingPage"));
const DonationPage = lazy(() => import("./pages/donationPage/DonationPage"));
const CurrentProject = lazy(() => import("./pages/currentProject/CurrentProject"));
const PastProject = lazy(() => import("./pages/pastProject/PastProject"));
const BlogDetail = lazy(() => import("./pages/BlogDetail/BlogDetail"));
const Gallery = lazy(() => import("./pages/GalleryPage/GalleryPage"));

function App() {
  const blogSliderRef = useRef(null);
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<Loader />}>
          <Layout blogSliderRef={blogSliderRef}>
            <Routes>
              <Route
                path="/"
                element={<LandingPage blogSliderRef={blogSliderRef} />}
              />
              <Route path="/donation" element={<DonationPage />} />
              <Route path="/current-projects" element={<CurrentProject />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/past-projects" element={<PastProject />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </Layout>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
