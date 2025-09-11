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

import { useRef } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  LandingPage,
  DonationPage,
  CurrentProject,
  PastProject,
} from "./pages/index";
import Layout from "./components/layout/Layout";
import BlogDetail from "./pages/BlogDetail/BlogDetail";
import Gallery from "./pages/GalleryPage/GalleryPage"; // Import the Gallery page

function App() {
  const blogSliderRef = useRef(null);
  return (
    <Router>
      <div className="App">
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
            <Route path="/gallery" element={<Gallery />} />{" "}
            {/* Add Gallery route */}
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}
export default App;
