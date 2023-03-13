import React from 'react';
import TopNavigation from './components/TopNavigation/TopNavigation';
import AllCoursePage from './pages/AllCoursePage';
import PortfolioPage from './pages/PortfolioPage';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AllServicePage from './pages/AllServicePage';

function App() {
  return (
    <div>
    <HomePage />
    <TopNavigation />
    <AllCoursePage />
    <PortfolioPage />
    <ContactPage />
    <AllServicePage/>
    </div>
  );
}
export default App;