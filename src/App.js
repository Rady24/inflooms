import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./pages/homePage";
import BrandPage from "./pages/brandPage";
import InfluencePage from "./pages/influencePage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar /> {/* This ensures Navbar is always displayed */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/brand-marketing" element={<BrandPage />} />
        <Route path="/influence-marketing" element={<InfluencePage />} />
        {/* <Route path="/for-influencers" element={<ForInfluencers />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
