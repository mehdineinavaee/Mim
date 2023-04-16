import React from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Content from "./components/content";
import Footer from "./components/footer";

function App() {
  return (
    <React.Fragment>
      <div className="wrapper">
        <Navbar />
        <Sidebar />
        <Content />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
