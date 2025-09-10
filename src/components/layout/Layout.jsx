// import React from 'react';
// import Header from '../header/Header';
// import Footer from '../footer/Footer';
// import './Layout.css';

// const Layout = ({ children }) => {
//   return (
//     <div className="layout-wrapper">
//       <Header />
//       <main className="main-content">
//         {children}
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Layout;

import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./Layout.css";

const Layout = ({ children, blogSliderRef }) => {
  return (
    <div className="layout-wrapper">
      <Header blogSliderRef={blogSliderRef} />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
