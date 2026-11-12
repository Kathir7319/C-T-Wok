import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { OrderTrayDrawer } from './components/OrderTrayDrawer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { Toast } from './components/Toast';

import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { LunchSpecialsPage } from './pages/LunchSpecialsPage';
import { AboutPage } from './pages/AboutPage';
import { CateringPage } from './pages/CateringPage';
import { ContactPage } from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <>
      <ScrollToTop />
      <AnnouncementBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/lunch-specials" element={<LunchSpecialsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/catering" element={<CateringPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <OrderTrayDrawer />
      <MobileStickyBar />
      <Toast />
    </>
  );
}
export default App;
