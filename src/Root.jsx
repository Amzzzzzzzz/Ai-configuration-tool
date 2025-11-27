import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import HistoryPage from "./pages/HistoryPage";

// Your existing App.jsx = the configurator
import App from "./App";

export default function Root() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/configure" element={<App />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
